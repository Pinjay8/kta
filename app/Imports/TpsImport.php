<?php

namespace App\Imports;

use App\Models\Tps;
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
        if (isset($row['no_tps'])  && isset($row['kelurahan']) &&  isset($row['kecamatan'])) {
            return new Tps([
                'no_tps'    => $row['no_tps'],
                'kelurahan' => $row['kelurahan'],
                'kecamatan' => $row['kecamatan'],
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
