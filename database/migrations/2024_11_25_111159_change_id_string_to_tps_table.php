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
        Schema::table('tps', function (Blueprint $table) {
            // $table->dropPrimary('id');
            // $table->string('id', 36)->change(); // Ubah menjadi string
            // $table->primary('id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('tps', function (Blueprint $table) {
            // $table->dropPrimary('id');
            // $table->integer('id')->change();
            // $table->primary('id');
        });
    }
};
