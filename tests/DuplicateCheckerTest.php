<?php

class DuplicateCheckerTest extends \PHPUnit\Framework\TestCase
{
    public function testPhoneNumbersAreDuplicated()
    {
        $duplicatechecker = new DuplicateChecker();

        $this->assertTrue($duplicatechecker->checkPhoneNumbers('074294458030', +4474294458030));
    }

}