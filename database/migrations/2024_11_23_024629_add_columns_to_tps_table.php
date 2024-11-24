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
            $table->after('kecamatan', function ($table) {
                $table->integer('perempuan')->default(0);
                $table->integer('laki_laki')->default(0);
                $table->integer('dpt')->default(0);
                $table->string('rw');
            });
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('tps', function (Blueprint $table) {
            $table->dropColumn(['perempuan', 'laki_laki', 'dpt', 'rw']);
        });
    }
};
