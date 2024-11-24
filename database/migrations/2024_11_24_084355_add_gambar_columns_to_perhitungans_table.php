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
            $table->string('gambar_c1_1')->nullable()->after('gambar_selfie');
            $table->string('gambar_c1_2')->nullable()->after('gambar_c1_1');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('perhitungans', function (Blueprint $table) {
            $table->dropColumn([ 'gambar_c1_1', 'gambar_c1_2']);
        });
    }
};
