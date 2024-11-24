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
            $table->dropColumn(['gambar_tps', 'gambar_selfie', 'laporan']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('perhitungan_calons', function (Blueprint $table) {
            $table->string('gambar_tps')->nullable();
            $table->string('gambar_selfie')->nullable();
            $table->text('laporan')->nullable();
        });
    }
};
