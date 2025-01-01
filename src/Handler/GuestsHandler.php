<?php

namespace App\Handler;

use App\Entity\Guests;
use Doctrine\ORM\EntityManagerInterface;use Monolog\Handler\Handler;
use phpDocumentor\Reflection\Types\This;

class GuestsHandler
{
    private $em;

    public function __construct(EntityManagerInterface $em)
    {
        $this->em = $em;

    }

    public function saveGuests ($data) : void
    {
        $guests = $this->em->getRepository(Guests::class)->findOneBy(['email' => $data['email']]);

        if (!$guests) {
            $guests = new Guests();
            $guests->setFirstName($data['firstname']);
            $guests->setLastName($data['lastname']);
            $guests->setEmail($data['email']);
            $guests->setAttending($data['isAttending']);
            $guests->setPlusOne($data['plusOne']);
            $guests->setNumPlusOne($data['numPlusOne']);
        }

        $guests->setCreatedAt(new \DateTime('now'));
        $guests->setUpdatedAt(new \DateTime('now'));

        $this->em->persist($guests);
        $this->em->flush();
    }

    public function getExistingGuest($data)
    {
       return $this->em->getRepository(Guests::class)->findOneBy(['email' => $data]);

    }


}