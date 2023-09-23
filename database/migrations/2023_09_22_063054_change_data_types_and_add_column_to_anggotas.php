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
        Schema::table('anggotas', function (Blueprint $table) {
            //
            $table->bigInteger('no_anggota')->change();
            $table->bigInteger('no_hp')->change();
            $table->bigInteger('nik')->change();

            // Add a new column
            $table->string('kta')->after('pekerjaan'); // 'kta' column added after 'pekerjaan'
        });
    }

    /**
     * Reverse the migrations.
     */
    
    public function down(): void
    {
        Schema::table('anggotas', function (Blueprint $table) {
            //
            $table->integer('no_anggota')->change();
            $table->integer('no_hp')->change();
            $table->integer('nik')->change();
            $table->dropColumn('kta');
        });
    }
};
