<?php

namespace App\Entity;

use App\Repository\GuestsRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: GuestsRepository::class)]
class Guests
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $firstName = null;

    #[ORM\Column(length: 255)]
    private ?string $lastName = null;

    #[ORM\Column]
    private ?bool $isAttending = null;

    #[ORM\Column(nullable: true)]
    private ?bool $plusOne = null;

    #[ORM\Column(nullable: true)]
    private ?int $numPlusOne = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE)]
    private ?\DateTimeInterface $createdAt = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE)]
    private ?\DateTimeInterface $updatedAt = null;

    #[ORM\Column(length: 255, unique: true)]
    private ?string $email = null;



    public function getId(): ?int
    {
        return $this->id;
    }

    public function getFirstName(): ?string
    {
        return $this->firstName;
    }

    public function setFirstName(string $firstName): static
    {
        $this->firstName = $firstName;

        return $this;
    }

    public function getLastName(): ?string
    {
        return $this->lastName;
    }

    public function setLastName(string $lastName): static
    {
        $this->lastName = $lastName;

        return $this;
    }

    public function isAttending(): ?bool
    {
        return $this->isAttending;
    }

    public function setAttending(bool $isAttending): static
    {
        $this->isAttending = $isAttending;

        return $this;
    }

    public function isPlusOne(): ?bool
    {
        return $this->plusOne;
    }

    public function setPlusOne(?bool $plusOne): static
    {
        $this->plusOne = $plusOne;

        return $this;
    }

    public function getNumPlusOne(): ?int
    {
        return $this->numPlusOne;
    }

    public function setNumPlusOne(?int $numPlusOne): static
    {
        $this->numPlusOne = $numPlusOne;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeInterface $createdAt): static
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getUpdatedAt(): ?\DateTimeInterface
    {
        return $this->updatedAt;
    }

    public function setUpdatedAt(\DateTimeInterface $updatedAt): static
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): static
    {
        $this->email = $email;

        return $this;
    }
}
