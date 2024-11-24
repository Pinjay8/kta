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
            $table->unsignedBigInteger('id_kegiatan')->after('id');

            // Add foreign key constraint if necessary
            $table->foreign('id_kegiatan')->references('id')->on('kegiatans');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('perhitungan_calons', function (Blueprint $table) {
            $table->dropColumn('id_kegiatan');

            // Drop foreign key constraint if added
            $table->dropForeign(['id_kegiatan']);
        });
    }
};
