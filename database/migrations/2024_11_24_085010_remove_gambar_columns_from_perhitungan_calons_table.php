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
        Schema::table('perhitungan_calons', function (Blueprint $table) {
            $table->dropColumn(['gambar_c1_1', 'gambar_c1_2', 'gambar_opsional', 'gambar_laporan', 'catatan']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('perhitungan_calons', function (Blueprint $table) {
            $table->string('gambar_c1_1')->nullable();
            $table->string('gambar_c1_2')->nullable();
            $table->string('gambar_opsional')->nullable();
            $table->string('gambar_laporan')->nullable();
            $table->string('catatan')->nullable();
        });
    }
};
