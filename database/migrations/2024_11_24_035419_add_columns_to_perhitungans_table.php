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
        Schema::table('perhitungans', function (Blueprint $table) {
            $table->string('gambar_selfie')->nullable()->after('id_tps');
            $table->string('gambar_laporan')->nullable()->after('suara_tidak_sah');
            $table->text('catatan')->nullable()->after('gambar_laporan');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('perhitungans', function (Blueprint $table) {
            $table->dropColumn(['gambar_selfie', 'gambar_laporan', 'catatan']);
        });
    }
};
