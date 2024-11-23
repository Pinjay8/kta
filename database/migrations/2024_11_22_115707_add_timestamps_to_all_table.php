<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('absensis', function (Blueprint $table) {
            //               
            $table->softDeletes(); 
        });

        Schema::table('kegiatans', function (Blueprint $table) {
            //               
            $table->softDeletes(); 
        });

        Schema::table('anggotas', function (Blueprint $table) {
            //               
            $table->softDeletes(); 
        });

        Schema::table('calons', function (Blueprint $table) {
            //               
            $table->softDeletes(); 
        });

        Schema::table('pengajuan_perhitungan_ulangs', function (Blueprint $table) {
            //               
            $table->softDeletes(); 
        });

        Schema::table('perhitungans', function (Blueprint $table) {
            //               
            $table->softDeletes(); 
        });

        Schema::table('tps', function (Blueprint $table) {
            //               
            $table->softDeletes(); 
        });

        Schema::table('users', function (Blueprint $table) {
            //               
            $table->softDeletes(); 
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            //
            $table->dropSoftDeletes(); // Removes the deleted_at column
        });
        Schema::table('tps', function (Blueprint $table) {
        //
        $table->dropSoftDeletes(); // Removes the deleted_at column
        });
        Schema::table('perhitungans', function (Blueprint $table) {
            //
            $table->dropSoftDeletes(); // Removes the deleted_at column
        });
        Schema::table('pengajuan_perhitungan_ulangs', function (Blueprint $table) {
            //
            $table->dropSoftDeletes(); // Removes the deleted_at column
        });
        Schema::table('calons', function (Blueprint $table) {
            //
            $table->dropSoftDeletes(); // Removes the deleted_at column
        });
        Schema::table('anggotas', function (Blueprint $table) {
            //
            $table->dropSoftDeletes(); // Removes the deleted_at column
        });
        Schema::table('kegiatans', function (Blueprint $table) {
            //
            $table->dropSoftDeletes(); // Removes the deleted_at column
        });
        Schema::table('absensis', function (Blueprint $table) {
            //
            $table->dropSoftDeletes(); // Removes the deleted_at column
        });
    }
};
