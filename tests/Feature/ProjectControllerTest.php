<?php

namespace Tests\Feature;

use App\Models\Project;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Inertia\Testing\AssertableInertia;
use Tests\TestCase;

class ProjectControllerTest extends TestCase
{

  protected function setUp(): void
  {
    parent::setUp();

    /**
     * @var \App\Models\User
     */
    $user = User::factory()->create();

    $this->actingAs($user);
  }

  /** @test */
  public function test_projects_form_is_rendered_properly()
  {
    $response = $this->get('/projects/new');

    $response->assertOk()->assertInertia(fn (AssertableInertia $page) => $page->component('Projects/ProjectForm'));
  }

  /** @test */
  public function test_project_is_created_successfully()
  {
    $response = $this->post('/projects', [
      'name' => 'Project test',
      'description' => 'Lorem ipsum dolor a met.'
    ]);

    $response->assertSessionHas("message.type", "success");
  }

  /** @test */
  public function test_project_is_validated_properly()
  {
    $response = $this->post('/projects', [
      'description' => 'Lorem ipsum dolor a met.'
    ]);

    $response->assertInvalid(['name']);
  }

  /** @test */
  public function test_project_page_is_rendered_properly()
  {
    $project = Project::factory()->create();

    $response = $this->get('/projects/' . $project->id);

    $response->assertInertia(
      fn (AssertableInertia $page) =>
      $page->component('Projects/Project')
        ->where('project.id', $project->id)
        ->where('project.name', $project->name)
        ->where('project.description', $project->description)
        ->where('project.owner.id', $project->owner_id)
    );
  }
}
