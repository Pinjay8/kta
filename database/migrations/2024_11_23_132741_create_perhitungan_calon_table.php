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
        Schema::create('perhitungan_calon', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('id_perhitungan');
            $table->unsignedBigInteger('id_anggota');
            $table->unsignedBigInteger('id_tps');
            $table->unsignedBigInteger('id_calon');
            $table->integer('suara_calon');
            $table->string('gambar_tps');
            $table->string('gambar_selfie');
            $table->string('gambar_c1_1');
            $table->string('gambar_c1_2');
            $table->string('gambar_opsional')->nullable();
            $table->text('laporan')->nullable();
            $table->string('gambar_laporan')->nullable();
            $table->boolean('perhitungan_ulang')->default(false);
            $table->timestamps();
            $table->softDeletes();

            // Add foreign key constraints if necessary
            $table->foreign('id_anggota')->references('id')->on('anggotas');
            $table->foreign('id_perhitungan')->references('id')->on('perhitungans');
            $table->foreign('id_tps')->references('id')->on('tps');
            $table->foreign('id_calon')->references('id')->on('calons');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('perhitungan_calon');
    }
};
