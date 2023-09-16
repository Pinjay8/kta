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
        Schema::create('anggotas', function (Blueprint $table) {
            $table->id();
            $table->integer('no_anggota')->unique();
            $table->string('nama');
            $table->string('no_hp')->unique();
            $table->integer('nik')->unique();
            $table->string('tempat_lahir');
            $table->string('tgl_lahir');
            $table->integer('jk');
            $table->string('jabatan');
            $table->string('pekerjaan');
            $table->string('kelurahan');
            $table->integer('rt');
            $table->integer('rw');
            $table->string('foto_kk')->nullable();
            $table->string('foto_profil')->nullable();
            $table->string('password');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('anggotas');
    }
};
