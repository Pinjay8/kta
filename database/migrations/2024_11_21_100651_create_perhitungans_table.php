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
        Schema::create('perhitungans', function (Blueprint $table) {
            $table->id();
            $table->foreignId('id_kegiatan')->constrained('kegiatans');
            $table->foreignId('id_anggota')->constrained('anggotas');
            $table->foreignId('id_tps')->constrained('tps');
            $table->integer('dptb');
            $table->integer('pemilih_hadir');
            $table->integer('suara_sah');
            $table->integer('suara_tidak_sah');
            $table->boolean('perhitungan_ulang')->default(false);
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('perhitungans');
    }
};
