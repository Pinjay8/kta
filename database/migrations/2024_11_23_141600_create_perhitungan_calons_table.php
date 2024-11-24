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
        Schema::create('perhitungan_calons', function (Blueprint $table) {
            $table->id();
            $table->foreignId('id_perhitungan')->constrained('perhitungans');
            $table->foreignId('id_anggota')->constrained('anggotas');
            $table->foreignId('id_tps')->constrained('tps');
            $table->foreignId('id_calon')->constrained('calons');
            $table->integer('suara_calon');
            $table->longText('gambar_tps')->nullable();
            $table->longText('gambar_selfie')->nullable();
            $table->longText('gambar_c1_1')->nullable();
            $table->longText('gambar_c1_2')->nullable();
            $table->longText('gambar_opsional')->nullable();
            $table->string('laporan');
            $table->longText('gambar_laporan')->nullable();
            $table->boolean('perhitungan_ulang')->default(false)->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('perhitungan_calons');
    }
};
