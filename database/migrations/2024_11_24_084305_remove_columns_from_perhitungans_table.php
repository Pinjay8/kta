<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class RemoveColumnsFromPerhitungansTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('perhitungans', function (Blueprint $table) {
            $table->dropColumn([
                'dptb',
                'pemilih_hadir',
                'suara_sah',
                'suara_tidak_sah',
                'gambar_laporan',
                'catatan',
            ]);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('perhitungans', function (Blueprint $table) {
            $table->string('dptb')->nullable();
            $table->integer('pemilih_hadir')->nullable();
            $table->integer('suara_sah')->nullable();
            $table->integer('suara_tidak_sah')->nullable();
            $table->string('gambar_laporan')->nullable();
            $table->text('catatan')->nullable();
        });
    }
}
