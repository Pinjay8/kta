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
            $table->text('catatan')->nullable()->after('gambar_laporan');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('perhitungan_calons', function (Blueprint $table) {
            $table->dropColumn('catatan');
        });
    }
};
