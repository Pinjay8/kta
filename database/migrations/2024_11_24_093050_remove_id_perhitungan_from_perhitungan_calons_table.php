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
            //
            Schema::table('perhitungan_calons', function (Blueprint $table) {
                $table->dropForeign(['id_perhitungan']);

                $table->dropColumn('id_perhitungan');
            });
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('perhitungan_calons', function (Blueprint $table) {
            //
            Schema::table('perhitungan_calons', function (Blueprint $table) {
                $table->unsignedBigInteger('id_perhitungan')->after('id_kegiatan');
    
                // If you had a foreign key constraint, you might want to add it back here
                $table->foreign('id_perhitungan')->references('id')->on('perhitungan');
            });
        });
    }
};
