<?php

namespace App\Imports;

use App\Models\Tps;
use Illuminate\Support\Str;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Concerns\WithValidation;

class TpsImport implements ToModel, WithHeadingRow
{
    /**
     * @param array $row
     *
     * @return \Illuminate\Database\Eloquent\Model|null
     */
    public function model(array $row)
    {
        if (
            isset($row['id'])
            && isset($row['no_tps'])
            && isset($row['kelurahan'])
            &&  isset($row['kecamatan'])
            &&  isset($row['rw'])
            &&  isset($row['laki_laki'])
            &&  isset($row['perempuan'])
            && isset($row['dpt'])
        ) {
            return new Tps([
                'id' => (string) $row['id'], // Pastik
                'no_tps'    => $row['no_tps'],
                'kelurahan' => $row['kelurahan'],
                'kecamatan' => $row['kecamatan'],
                'rw'        => $row['rw'],
                'laki_laki' => $row['laki_laki'],
                'perempuan' => $row['perempuan'],
                'dpt'       => $row['dpt'],
            ]);
        }
    }

    // public function rules(): array
    // {
    //     return [
    //         'name' => 'required',
    //         'password' => 'required|min:5',
    //         'email' => 'required|email|unique:users'
    //     ];
    // }
}
