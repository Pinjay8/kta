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
            $table->longText('no_anggota');
            $table->string('nama');
            $table->string('no_hp');
            $table->bigInteger('nik');
            $table->string('id_tps', 100); // Menyesuaikan dengan panjang id_tps yang digunakan, misalnya 36 karakter

            // Tentukan relasi dengan tabel tps jika diperlukan
            $table->foreign('id_tps')->references('id')->on('tps');
            $table->string('alamat');
            $table->string('kecamatan');
            $table->string('kelurahan');
            $table->string('status');
            $table->rememberToken();
            $table->timestamps();
            $table->softDeletes();
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
