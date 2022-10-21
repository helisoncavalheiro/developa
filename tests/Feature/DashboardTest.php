<?php

namespace Tests\Feature;

// use Illuminate\Foundation\Testing\RefreshDatabase;

use App\Models\User;
use Inertia\Testing\Assert;
use Inertia\Testing\AssertableInertia;
use Tests\TestCase;

class DashboardTest extends TestCase
{
  /**
   * A basic test example.
   *
   * @return void
   */
  public function test_the_application_dashboard_is_rendered_properly_for_authenticated_users()
  {
    /**
     * @var \App\Models\User
     */
    $user = User::factory()->make();

    $this->actingAs($user);

    $response = $this->get('/');

    $response->assertOk()
      ->assertInertia(fn (AssertableInertia $page) =>
      $page->component('Home')
        ->has('projects'));
  }

  /**
   * Test if the dashboard is not rendered for unauthenticated users
   *
   * @return void
   */
  public function test_the_apllication_dashboard_is_not_rendered_for_unauthenticated_users()
  {
    $response = $this->get('/');

    $response->assertRedirect('/login');
  }
}
