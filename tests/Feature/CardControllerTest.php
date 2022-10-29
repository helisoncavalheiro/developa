<?php

namespace Tests\Feature;

use Tests\TestCase;

class CardControllerTest extends TestCase
{
    public function test_card_form_is_rendered_properly()
    {
        $response = $this->get('/cards/new');

        $response->assertStatus(200);
    }
}
