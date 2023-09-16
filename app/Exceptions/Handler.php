<?php

namespace App\Exceptions;

use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Throwable;
use Illuminate\Auth\AuthenticationException;

class Handler extends ExceptionHandler
{
    /**
     * The list of the inputs that are never flashed to the session on validation exceptions.
     *
     * @var array<int, string>
     */

    
    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];


    protected $dontReport = [
     //
    ];
    /**
     * Register the exception handling callbacks for the application.
     */
    public function register(): void
    {
        $this->reportable(function (Throwable $e) {
            //
        });
    }
    public function report(Throwable $exception){
        parent::report($exception);
    }

    public function render($request, Throwable $exception){

        if($exception instanceof \Laravel\Sanctum\Exceptions\MissingAbilityException)
        {
            return response()->json([
                'errors'=>[
                    'status' => 401,
                    'message' => 'unauthenticated',
                ]
                ],401);
        }

        $e = $this->prepareException($exception);
        if($e instanceof HttpResponseException){
            return $e->getResponse();
        }elseif ($e instanceof AuthenticationException) {
            return $this->unauthenticated($request, $e);
        }elseif ($e instanceof ValidationException) {
            return $this->convertValidationExceptionToResponse($e, $request);
        }
        return $this->prepareResponse ($request, $e);
    }

    protected function unauthenticated ($request, AuthenticationException $exception)
    {
        return response()->json([
            'errors'=>[
                'status' => 401,
                'message' => 'unauthenticated',
            ]
            ],401);
    }
}
