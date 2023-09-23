export default function ListStudent(){

    const students = [{id: '1', nama: 'Wildan', kelas: 'RPL 3'}, {id: '2', nama: 'Rifqi', kelas: 'RPL 3'}, {id: '3', nama: 'Hamdani', kelas: 'RPL 2'}];
    
    return (
        <>
            <h3>Daftar Mahasiswa</h3>
            <ul>
                {
                    students.map((student, index) => (
                        <li key={index}>{student.nama} - {student.kelas}</li>
                    ))
                }
            </ul>
        </>
    )
  }