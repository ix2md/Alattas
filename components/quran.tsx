import React from 'react';

interface Surah {
    number: number;
    name: string;
    englishName: string;
    ayahs: Ayah[]; // Define Ayah interface if needed
}

interface Ayah {
    number: number;
    text: string;
    numberInSurah: number;
    juz: number;
    manzil: number;
    page: number;
    ruku: number;
    hizbQuarter: number;
    sajda: boolean;
}

export default async function Quran({ id }: { id: number }): Promise<JSX.Element> {
    await new Promise<void>((resolve) => {
        setTimeout(() => {
            resolve();
        }, 2000);
    });

    const res = await fetch(`https://api.alquran.cloud/v1/surah/${id}`, {
        next: {
            revalidate: 120,
        },
    });
    const data = await res.json();
    const surah: Surah = data.data; // Accessing the single Surah object
    // console.log(data)
    // const dataJSX = surahs.map((quran, i) => (
    //     <div key={i}>
    //         <h1>{quran.name}</h1>
    //     </div>
    // ))


    return (
        <div>
            {/* <h1>{surah.name}</h1>
            <h2>{surah.englishName}</h2> */}
            {/* Displaying ayahs */}
            <div className=' flex justify-center items-center flex-col'>
                {surah.ayahs.map((ayah, i) => (
                    <div key={i}>
                        <p>{ayah.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}