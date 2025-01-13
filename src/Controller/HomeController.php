<?php

namespace App\Controller;

use App\Form\GuestType;
use App\Handler\GuestsHandler;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Validator\ConstraintViolation;

class HomeController extends AbstractController
{

    #[Route('/', name: 'home')]
    public function home()
    {
        return $this->forward('App\Controller\HomeController::welcome', ['page' => 'home']);
    }

    #[Route('/wedding/{page}', name:'homepage', requirements: ['page' => '.*'])]
    public function welcome()
    {
        $googleMapsApiKey = $this->getParameter('google_maps_api_key');

        return $this->render('index.html.twig', [
            'google_maps_api_key' => $googleMapsApiKey
        ]);

    }

    #[Route('/api/add-guest', name: 'api_add_guest', methods: ['POST'])]
    public function addGuest
    (
        Request       $request,
        GuestsHandler $guestsHandler
    ): JsonResponse
    {
        $form = $this->createForm(GuestType::class);
        $data = json_decode($request->getContent(), true);
        $form->submit($data);


        if ($form->isSubmitted() && $form->isValid()) {
            $data = $form->getData();
            $guestsHandler->saveGuests($data);

            return new JsonResponse([
                "success" => true,
                "data" => $data
            ]);
        }

        return new JsonResponse([
            "success" => false,
            "data" => $data,
            "errors" => $this->getFormErrors($form)
        ]);

    }

    #[Route('/api/check-guest', name: 'api_check_guest', methods: ['POST'])]
    public function checkGuests(Request $request, GuestsHandler $guestsHandler): JsonResponse
    {
        $data = json_decode($request->getContent(), true);


        $email = $data['email'] ?? [];
        if (!$email) {
            return new JsonResponse([
                'exists' => false,
                'errors' =>
                    [
                        'message' => 'The email address provided is invalid.',
                    ]
            ]);
        }

        $guestExists = $guestsHandler->getExistingGuest($email);
        return new JsonResponse([
            'exists' => $guestExists ,
            'errors' => [
                'message' =>'You have already confirmed your attendance',
                ]
        ]);
    }

    private function getFormErrors(FormInterface $form): array
    {
        $errors = [];
        foreach ($form->getErrors(true) as $error) {
            /** @var ConstraintViolation $error */
            $field = $error->getRoot()->getName();
            $errors[$field][] = $error->getMessage();
        }

        return $errors;
    }

}