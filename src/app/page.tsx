import Heading from "@/components/animation/Heading";
import ImageAnimation from "@/components/animation/Image";
import Paragraph from "@/components/animation/Paragraph";
import { Navbar } from "@/components/Navbar";
import { ChevronsDown } from "lucide-react";
import Image from "next/image";

export default function Home() {
  // const imagePahlawan
  return (
    <main className="min-h-screen w-screen overflow-x-hidden">
      {/* <Navbar /> */}
      <section className="relative flex min-h-screen w-full items-center justify-center bg-[url('/images/cover-1.jpg')] bg-cover bg-center">
        <Image
          src={"/images/cover-1.jpg"}
          alt=""
          width={4096}
          height={2731}
          className="absolute top-0 -z-10 h-auto w-full object-fill max-md:hidden"
        />
        <div className="flex items-center gap-10 text-6xl sm:text-5xl md:text-9xl">
          <h1 className=" font-bold">Masjid</h1>
          <h1 className=" italic">Istiqlal</h1>
        </div>
        <div className="absolute -bottom-52 h-[30rem] w-full bg-gradient-to-t from-[rgb(254_220_96/1)_50%] to-transparent" />
        <ChevronsDown className="absolute -bottom-[0rem] left-[45%] z-20 h-10 w-10 animate-bounce md:left-1/2" />
      </section>
      <section className="relative min-h-screen space-y-10 bg-custom-yellow pb-20 pt-80 text-black lg:px-20">
        <Heading
          className="px-5 text-center font-serif text-5xl md:text-8xl xl:px-40"
          color="#000"
        >
          Sejarah <span className="font-bold italic">Masjid Istiqlal</span>{" "}
          Sebagai Simbol{" "}
          <span className="font-bold italic">Kemerdekaan Indonesia</span>.
        </Heading>
        <ImageAnimation start="right">
          <Image
            src={`/images/pahlawan.png`}
            alt=""
            width={1080}
            height={893}
            className="z-50 mx-auto max-md:px-5"
          />
        </ImageAnimation>
        <ul className="space-y-20 px-5 xl:px-40">
          <ImageAnimation start="left" className="timeline-box-1">
            <h1 className="text-center text-5xl font-bold xl:text-7xl">1950</h1>
            <p className="text-sm font-light xl:text-xl">
              Sejumlah tokoh Islam menggelar rapat di Deca Park untuk membahas
              pembangunan masjid. Tokoh yang mengikuti rapat di antaranya Anwar
              Tjokroaminoto, Taufiqurrahman, dan Wahid Hasyim.
            </p>
          </ImageAnimation>

          <li className="flex w-full flex-col items-center md:flex-row md:justify-center">
            <div className="flex flex-col gap-10">
              <ImageAnimation start="left" className="timeline-box-2">
                <h1 className="text-5xl font-bold xl:text-7xl">1955</h1>
                <p className="text-sm font-light xl:text-xl">
                  Pemerintah mengadakan sayembara maket Masjid Istiqlal dan
                  menggalang dana dari masyarakat untuk membiayai pembangunan.
                </p>
              </ImageAnimation>
              <ImageAnimation start="left" className="timeline-box-2">
                <h1 className="text-5xl font-bold xl:text-7xl">1954</h1>
                <p className="text-sm font-light xl:text-xl">
                  Yayasan Masjid Istiqlal diresmikan setelah Presiden Sukarno
                  menyetujui rencana pembangunan masjid.
                </p>
              </ImageAnimation>
            </div>

            <div className="flex flex-col">
              <ImageAnimation start="right">
                <Image
                  src={"/images/doc-2.png"}
                  alt=""
                  width={750}
                  height={512}
                  className="full h-auto"
                />
                <p className="p-1 text-justify text-xs tracking-wider max-md:text-xs">
                  Presiden Sukarno dan dewan juri sayembara perancangan Masjid
                  Istiqlal berfoto dengan tiga panel gambar karya F. Silaban
                  yang ditetapkan sebagai pemenang pada 1955. Sumber: Selayang
                  pandang Masjid Istiqlal (1987).
                </p>
              </ImageAnimation>
            </div>
          </li>

          <li className="flex w-full flex-col items-center md:flex-row-reverse md:justify-center">
            <div className="flex flex-col gap-10">
              <ImageAnimation start="right" className="timeline-box-2">
                <h1 className="text-5xl font-bold xl:text-7xl">1961</h1>
                <p className="text-sm font-light xl:text-xl">
                  Pemerintah mengadakan sayembara maket Masjid Istiqlal dan
                  menggalang dana dari masyarakat untuk membiayai pembangunan.
                </p>
              </ImageAnimation>
              <ImageAnimation
                start="right"
                className="h-[12rem] rounded-xl bg-black p-5 text-custom-yellow"
              >
                <h1 className="text-5xl font-bold xl:text-7xl ">1978</h1>
                <p className="text-sm font-light xl:text-xl">
                  Masjid Istiqlal selesai dibangun, peresmiannya dihadiri oleh
                  Presiden Suharto.
                </p>
              </ImageAnimation>
            </div>
            <div className="flex flex-col">
              <ImageAnimation start="left">
                <Image
                  src={"/images/doc-1.png"}
                  alt=""
                  width={772}
                  height={462}
                  className="h-auto w-full"
                />
                <p className="p-1 text-justify text-xs tracking-wider">
                  KOMPAS/H Kodhyat Persiapan pengecoran kubah Masjid Istiqlal
                  pada awal Agustus 1971. Lokasi masjid negara yang tengah
                  dibangun itu bersebelahan dengan Gereja Katheral Jakarta.
                </p>
              </ImageAnimation>
            </div>
          </li>
        </ul>
      </section>
      <section className="relative flex flex-col items-center space-y-10 bg-white pb-20 pt-10 text-black md:pt-40">
        <Heading
          color="#000"
          className="px-10 text-center text-6xl xl:px-40 xl:text-8xl"
        >
          Ide <span className="font-bold italic">Proklamasi</span> hingga
          Monumen <span className="font-bold italic">Keagungan Nasional</span>.
        </Heading>
        <ImageAnimation start="left">
          <Image
            src={"/images/doc-3.png"}
            alt=""
            width={700}
            height={393}
            className="h-auto w-full"
          />
        </ImageAnimation>
        <div className="space-y-10 px-10 text-base font-light md:px-20 lg:text-justify lg:text-xl xl:px-40 xl:px-80">
          <Paragraph>
            Empat tahun pascaproklamasi kemerdekaan, tokoh agama Islam di Tanah
            Air mulai membicarakan rencana pendirian masjid monumental yang
            agung dan megah. Bangunan itu perlu untuk menunjukkan identitas
            Indonesia sebagai negara berpenduduk muslim terbesar sedunia.
          </Paragraph>
          <Paragraph>
            Achmad Rizki Nugraha dalam Pandangan Politik Soekarno dalam
            Membangun Masjid Istiqlal mencatat bahwa pada 1950, Wahid Hasyim
            yang saat itu menjabat Menteri Agama (Menag) RI bersama anak tokoh
            Syarikat Islam, Anwar Tjokroaminoto, menggelar pertemuan di Deca
            Park, Jalan Medan Merdeka Utara, tak jauh dari Istana Merdeka.
            Sekitar 200—300 orang tokoh Islam hadir mengikuti rapat yang
            dipimpin Mantan Menag RI, Taufiqurrahman.
          </Paragraph>
          <Paragraph>
            Pertemuan itu membentuk pengurus Yayasan Masjid Istiqlal. Para
            hadirin sepakat, Anwar Tjokroaminoto menjadi ketua. Setelah rapat
            usai, sejumlah tokoh Islam mengajukan ide kepada Anwar untuk
            membangun Masjid Istiqlal di ibu kota Jakarta. Lantas, dia pun
            menyampaikan ide itu kepada Presiden RI Sukarno.
          </Paragraph>
          <Paragraph>
            Sukarno ternyata setuju dan menyatakan siap membantu pembangunan
            masjid tersebut. Singkat cerita, Yayasan Masjid Istiqlal diresmikan
            di depan Notaris Elisa Pondaag pada 7 Desember 1954. Sukarno
            diangkat sebagai kepala bagian teknik.
          </Paragraph>
        </div>
      </section>
      <section className="relative flex flex-col items-center space-y-10 pt-10 text-custom-yellow md:px-20 md:pt-40">
        <Image
          src={"/images/cover-3.png"}
          alt=""
          width={1739}
          height={1737}
          className="absolute bottom-0 -z-20 h-auto w-full opacity-50"
        />
        <div className="absolute -bottom-40 left-0 -z-10 h-[40rem] w-full bg-gradient-to-t from-transparent via-[rgb(0_0_0/1)_30%] to-transparent" />
        <Heading color="#FEDC60" className="text-center text-6xl md:text-8xl ">
          <span className="italic">Sayembara</span> dan{" "}
          <span className="italic">Lokasi</span>: Perjalanan Awal Pembangunan{" "}
          <span className="italic">Masjid Istiqlal</span>
        </Heading>

        <div className="lf:px-40 space-y-10 px-5 text-left text-base font-light md:text-justify lg:text-xl xl:px-80">
          <Paragraph>
            Setelah panitia terbentuk dan lokasi pembangunan masjid ditentukan,
            pemerintah mengadakan sayembara maket Masjid Istiqlal. Kegiatan ini
            diumumkan melalui surat kabar dan media massa pada 22 Februari 1955
            dan ditutup pada 30 Mei 1955. Sukarno bertindak sebagai ketua dewan
            juri.
          </Paragraph>
          <Paragraph>
            Setelah menggelar berkali-kali sidang di Istana Negara, dewan juri
            akhirnya memutuskan maket milik arsitek Friedrich Silaban sebagai
            pemenang dengan sandi “Ketuhanan”. Kemudian, perdebatan muncul saat
            menentukan lokasi pembangunan Masjid Istiqlal. Hingga akhirnya,
            Sukarno memutuskan masjid ini dibangun di Taman Wijaya Kusuma yang
            dahulu bernama Wilhelmina Park.
          </Paragraph>
          <div className="flex w-full flex-col items-center">
            <ImageAnimation start="right">
              <Image
                src={"/images/doc-4.png"}
                alt=""
                width={920}
                height={420}
                className="full h-auto"
              />
              <p className="w-full text-sm tracking-wider">
                Wilhelmina Park. Tropen museum
              </p>
            </ImageAnimation>
          </div>
          <Paragraph>
            Wilhelmina Park pernah digunakan sebagai tempat penobatan nenek Ratu
            Beatrix, yaitu Ratu Wilhelmina, pada 1898. Taman ini terletak di
            sebelah tenggara kawasan Weltervreden dan dihiasi pepohonan rindang.
            Di sana, terdapat dua alur sungai Ciliwung dan beberapa jembatan
            yang menghubungkan kedua tepiannya. Di tengah Wilhelmina Park, ada
            sebuah benteng yang dibangun Gubernur Jenderal van der Bosch pada
            1834, yakni Citadel Frederik Henderik.
          </Paragraph>
        </div>
      </section>
      <section className="relative flex flex-col items-center space-y-10 pt-40 text-custom-yellow lg:px-20">
        <Heading
          color="#FEDC60"
          className="text-center text-6xl md:text-8xl xl:px-40"
        >
          Proses Panjang Pembangunan Masjid Istiqlal:{" "}
          <span className="italic">Pembongkaran Benteng</span> dan{" "}
          <span className="italic">Kendala Dana</span>.
        </Heading>

        <div className="space-y-10 px-5 font-light lg:text-justify lg:text-xl xl:px-40 xl:px-80">
          <Paragraph>
            Pada 26 November 1954, Pemerintah Kota Jakarta mulai membongkar
            kompleks Benteng tersebut untuk dijadikan lahan bangunan Masjid
            Istiqlal. Pada 1960, ribuan orang dari berbagai daerah datang untuk
            membersihkan taman itu yang dahulu sepi, kotor, tak terurus. Mereka
            bahkan membawa peralatan sendiri.
          </Paragraph>
          <Paragraph>
            Proses pembangunan Masjid Istiqlal cukup lama. Pembongkaran benteng
            saja menghabiskan waktu nyaris satu setengah tahun karena petugas
            mesti menghancurkan terowongan bawah tanah. Selama pembongkaran,
            petugas menemukan juga bagian benteng berupa terowongan Berland
            Matraman yang dahulu menjadi tempat pelatihan militer. Pemerintah
            mengerahkan prajurit Zeni Angkatan darat untuk menghancurkan benteng
            menggunakan dinamit.
          </Paragraph>
          <Paragraph>
            Di samping itu, jalur kereta api di sebelah proyek Masjid Istiqlal
            dipindahkan ke daerah pinggiran. Gedung-gedung milik angkatan darat
            di sekitar masjid juga dibongkar untuk menyediakan lapangan parkir
            dan halaman kosong sebagai penyeimbang dari kemegahan dan luasnya
            masjid ini.
          </Paragraph>
          <Paragraph>
            &ldquo;Dibangun pada masa Presiden Sukarno, lalu diresmikan atau
            selesai pembangunannya pada 1978 oleh Presiden Suharto. Hampir 17
            tahun untuk membangun masjid Istiqlal yang besar ini,&rdquo; ujar
            Kasubbag Humas Badan Pengelola Masjid Istiqlal (BPMI), Saparwadi
            dalam acara GNFI Virtual Tour Jelajah Kota Eps 1: Masjid Istiqlal.
          </Paragraph>
          <Paragraph>
            Awalnya, pemerintah tidak punya modal yang cukup untuk membangun
            Masjid Istiqlal ini. Pada malam pengumuman hasil sayembara di Istana
            Negara, biaya yang terkumpul baru berjumlah Rp 442.000. Kekurangan
            dana juga menjadi faktor yang menyebabkan pembangunan masjid ini
            berlangsung lama. Sepanjang 1961—1965, pemerintah mengeluarkan dana
            sebesar Rp. 3.044.421.717,47.
          </Paragraph>
        </div>
        <Image
          src={"/images/cover-4.png"}
          alt=""
          width={2178}
          height={1226}
          className="absolute bottom-0 -z-20 h-auto w-full opacity-50"
        />
        <div className="absolute -bottom-20 left-0 -z-10 h-[20rem] w-full bg-gradient-to-t from-[rgb(0_0_0/1)_10%] to-transparent" />
      </section>
      <section className="relative flex min-h-screen flex-col items-center space-y-10 pb-[30rem] pt-40 text-custom-yellow lg:px-20">
        <Heading
          color="#FEDC60"
          className="px-5 text-center text-6xl lg:text-8xl xl:px-40"
        >
          Gerakan <span className="italic">Penggalangan Dana</span> dan{" "}
          <span className="italic">Makna</span> di Balik Nama Masjid Istiqlal.
        </Heading>

        <div className="text space-y-10 px-5 font-light lg:text-justify lg:text-xl xl:px-40 xl:px-80">
          <Paragraph>
            Pada 1955, pemerintah mengumumkan seruan kepada umat Islam untuk
            membantu menggalang dana pembangunan Masjid Istiqlal. Gerakan
            masyarakat untuk pembangunan Masjid Istiqlal pun tumbuh karena
            taksiran dana yang berubah seiring dengan nilai mata uang saat itu
            tidak stabil.
          </Paragraph>
          <Paragraph>
            Sedikit demi sedikit dana pun terkumpul. Para tokoh Islam saat itu
            meyakini, berapapun dana yang dibutuhkan, asal proyek mulai
            dikerjakan, maka masalah keuangan dapat diusahakan. Akhirnya, tiang
            pertama Masjid Istiqlal mulai dipancangkan pada 24 Agustus 1961.
          </Paragraph>
          <Paragraph>
            Bukan tanpa alasan pula masjid ini diberi nama Istiqlal yang dalam
            Bahasa Arab berarti “Merdeka”. Ada makna mendalam di balik nama
            tersebut.
          </Paragraph>
          <Paragraph>
            &ldquo;Masjid Istiqlal ini adalah salah satu monumen wujud rasa
            syukur, rasa terima kasih yang sebesar besarnya kepada Tuhan yang
            maha pencipta, Allah Subhanahu Wa Ta&apos;ala atas anugerah,
            pemberian, kemerdekaan Republik Indonesia,&rdquo kata Saparwadi.
          </Paragraph>
        </div>
        <Image
          src={"/images/cover-5.png"}
          alt=""
          width={1703}
          height={959}
          className="absolute bottom-0 -z-20 h-auto w-full"
        />
        <div className="absolute bottom-0 left-0 -z-10 h-[20rem] w-full bg-gradient-to-t from-[#FEDC60]/50 to-transparent" />
      </section>
    </main>
  );
}
