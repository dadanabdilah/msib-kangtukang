import { Container, Row, Col, Image, Card, Ratio } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import FooTer from "../components/FooTer";
import "../App.css";
import bgPage from "../assets/img/intro.png";
import tukangBangunan from "../assets/img/layanan/builders.jpg";
import tukangCat from "../assets/img/layanan/painters.jpg";
import tukangAtap from "../assets/img/layanan/roofers.jpg";
import tukangSanitair from "../assets/img/layanan/handyman.jpg";
import tukangLas from "../assets/img/layanan/welder.jpg";
import tukangListrik from "../assets/img/layanan/electrician.jpg";
import icon1 from "../assets/img/testimoni/man.png";
import icon2 from "../assets/img/testimoni/male.png";
import icon3 from "../assets/img/testimoni/man2.png";
import iconTentang from "../assets/img/tentang.png";

export default function Home() {
  return (
    <>
      <NavBar />
      {/* Home */}
      <section id="intro">
        <Container style={{ marginTop: "90px" }}>
          <Row className="mt-5">
            <Col md={7} className="pt-5">
              <h1>
                Platform Jasa Tukang Profesional dan Kebutuhan Bangunan
                Terpercaya
              </h1>
              <p>Kamu Bisa Pilih Sesuai Kebutuhanmu</p>
              <Row>
                <Col md={6} className="px-1">
                  <Link
                    to="#"
                    className="btn-CariTukang border border-light py-2 rounded"
                  >
                    Cari Tukang
                  </Link>
                  <Link to="/register" className="btn-JadiMitra py-2 rounded">
                    Jadi Mitra
                  </Link>
                </Col>
              </Row>
            </Col>
            <Col md={5}>
              <Image src={bgPage} fluid></Image>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Layanan */}
      <section id="layanan">
        <Container className="py-5">
          <h2 className="text-center">Layanan Kami</h2>
          <Row className="justify-content-md-center m-0">
            <Col md={3} className="my-5">
              <Card className="border-0 shadow" style={{ height: "350px" }}>
                <Card.Body style={{ padding: "0" }}>
                  <Card.Img
                    variant="top"
                    src={tukangBangunan}
                    className="text-center"
                  ></Card.Img>
                  <Card.Subtitle
                    className="text-center my-3 fw-semibold"
                    style={{ color: "#65B741" }}
                  >
                    Tukang Bangunan
                  </Card.Subtitle>
                  <hr id="card-divider" />
                  <Card.Text
                    className="text-center my-3 opacity-50 px-2"
                    style={{ fontSize: "15px" }}
                  >
                    Tukang melibatkan pembangunan rumah dan lainnya
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} className="my-5">
              <Card className="border-0 shadow" style={{ height: "350px" }}>
                <Card.Body style={{ padding: "0", backgroundColor: "#F3F8FF" }}>
                  <Card.Img
                    variant="top"
                    src={tukangCat}
                    className="text-center"
                  ></Card.Img>
                  <Card.Subtitle
                    className="text-center my-3 fw-semibold"
                    style={{ color: "#65B741" }}
                  >
                    Tukang Cat
                  </Card.Subtitle>
                  <hr id="card-divider" />
                  <Card.Text
                    className="text-center my-3 opacity-50 px-2"
                    style={{ fontSize: "15px" }}
                  >
                    Tukang untuk mengecat rumah dan pekerjaan lainnya
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} className="my-5">
              <Card className="border-0 shadow" style={{ height: "350px" }}>
                <Card.Body style={{ padding: "0", backgroundColor: "#F3F8FF" }}>
                  <Card.Img
                    variant="top"
                    src={tukangAtap}
                    className="text-center"
                  ></Card.Img>
                  <Card.Subtitle
                    className="text-center my-3 fw-semibold"
                    style={{ color: "#65B741" }}
                  >
                    Tukang Atap
                  </Card.Subtitle>
                  <hr id="card-divider" />
                  <Card.Text
                    className="text-center my-3 opacity-50 px-2"
                    style={{ fontSize: "15px" }}
                  >
                    Tukang untuk perbaikan atap dan plafon
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} className="my-5">
              <Card className="border-0 shadow" style={{ height: "350px" }}>
                <Card.Body style={{ padding: "0", backgroundColor: "#F3F8FF" }}>
                  <Card.Img
                    variant="top"
                    src={tukangSanitair}
                    className="text-center"
                  ></Card.Img>
                  <Card.Subtitle
                    className="text-center my-3 fw-semibold"
                    style={{ color: "#65B741" }}
                  >
                    Tukang Sanitair
                  </Card.Subtitle>
                  <hr id="card-divider" />
                  <Card.Text
                    className="text-center my-3 opacity-50 px-2"
                    style={{ fontSize: "15px" }}
                  >
                    Tukang untuk fasilitas kebersihan rumah dan lainnya
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} className="my-5">
              <Card className="border-0 shadow" style={{ height: "350px" }}>
                <Card.Body style={{ padding: "0", backgroundColor: "#F3F8FF" }}>
                  <Card.Img
                    variant="top"
                    src={tukangLas}
                    className="text-center"
                  ></Card.Img>
                  <Card.Subtitle
                    className="text-center my-3 fw-semibold"
                    style={{ color: "#65B741" }}
                  >
                    Tukang Las
                  </Card.Subtitle>
                  <hr id="card-divider" />
                  <Card.Text
                    className="text-center my-3 opacity-50 px-2"
                    style={{ fontSize: "15px" }}
                  >
                    Tukang untuk perbaikan kanopi dan pagar
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} className="my-5">
              <Card className="border-0 shadow" style={{ height: "350px" }}>
                <Card.Body style={{ padding: "0", backgroundColor: "#F3F8FF" }}>
                  <Card.Img
                    variant="top"
                    src={tukangListrik}
                    className="text-center"
                  ></Card.Img>
                  <Card.Subtitle
                    className="text-center my-3 fw-semibold"
                    style={{ color: "#65B741" }}
                  >
                    Tukang Listrik
                  </Card.Subtitle>
                  <hr id="card-divider" />
                  <Card.Text
                    className="text-center my-3 opacity-50 px-2"
                    style={{ fontSize: "15px" }}
                  >
                    Tukang untuk perbaikan listrik di dalam / luar rumah
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Testimoni */}
      <section id="testimoni">
        <Container className="py-5">
          <h2 className="text-center">Testimoni</h2>
          <Row>
            <Col md={4} className="mt-4 mb-5">
              <Card className="border-0 bg-transparent">
                <Card.Header className="text-center border-0 bg-transparent">
                  <Card.Img
                    variant="top"
                    src={icon1}
                    style={{ width: "100px" }}
                  ></Card.Img>
                </Card.Header>
                <Card.Body className="bg-light rounded shadow">
                  <blockquote className="blockquote mb-0 px-2">
                    <Card.Text className="my-3" style={{ fontSize: "15px" }}>
                      {" "}
                      Pelayanan KangTukang sangat cepat dan tanggap. Sebelum
                      bekerja KangTukang memberikan layanan survey sehingga
                      membuat pekerjaan lebih efektifdan akurat{" "}
                    </Card.Text>
                    <footer
                      className="blockquote-footer mt-3"
                      style={{ fontSize: "13px" }}
                    >
                      Bpk Jon <cite title="Source Title">(Pengusaha)</cite>
                      <br />
                      Jl. Anggrek Gg. Kebayu{" "}
                    </footer>
                  </blockquote>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mt-4 mb-5">
              <Card className="border-0 bg-transparent">
                <Card.Header className="text-center border-0 bg-transparent">
                  <Card.Img
                    variant="top"
                    src={icon2}
                    style={{ width: "100px" }}
                  ></Card.Img>
                </Card.Header>
                <Card.Body className="bg-light rounded shadow">
                  <blockquote className="blockquote mb-0 px-2">
                    <Card.Text className="my-3" style={{ fontSize: "15px" }}>
                      {" "}
                      Sebagai orang yang awam terhadap dunia bangunan saya
                      diedukasi dan diberikan rekomendasi mulai dari desain
                      hingga pemilihan material bangunan oleh tim KangTukang.
                      Jadi pelayanan KangTukang sangat membantu dari yang awam
                      menjadi sangat muda{" "}
                    </Card.Text>
                    <footer
                      className="blockquote-footer mt-3"
                      style={{ fontSize: "13px" }}
                    >
                      Bu Tarti <cite title="Source Title">(IRT)</cite>
                      <br />
                      Jl. Anggrek Gg. Kamboja{" "}
                    </footer>
                  </blockquote>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mt-4 mb-5">
              <Card className="border-0 bg-transparent">
                <Card.Header className="text-center border-0 bg-transparent">
                  <Card.Img
                    variant="top"
                    src={icon3}
                    style={{ width: "100px" }}
                  ></Card.Img>
                </Card.Header>
                <Card.Body className="bg-light rounded shadow">
                  <blockquote className="blockquote mb-0 px-2">
                    <Card.Text className="my-3" style={{ fontSize: "15px" }}>
                      {" "}
                      Pekerjaan atap berbahan dasar spandex harus dilakukan
                      dengan hati-hati. Jika tidak maka bisa mengakibatkan
                      kebocoran pada spandex akibat drilling yang kurang
                      sempurna. Tidak salah jika KangTukang memberikan garansi
                      kerapihan pekerjaan. Kualitas pekerjaan tenaga KangTukang
                      sangat memuaskan{" "}
                    </Card.Text>
                    <footer
                      className="blockquote-footer mt-3"
                      style={{ fontSize: "13px" }}
                    >
                      Bpk Suga <cite title="Source Title">(Karyawan)</cite>
                      <br />
                      Jl. Anggrek Gg. Sagu{" "}
                    </footer>
                  </blockquote>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Tentang */}
      <section id="tentang">
        <Container className="px-5" fluid>
          <Row className="justify-content-md-center">
            <Col md={4} className="text-center my-5">
              <Image src={iconTentang} style={{ width: "50%" }}></Image>
            </Col>
            <Col md="auto" className="text-center px-5">
              <h2 className="my-2">Tentang Kami</h2>
              <p>
                KangTukang.com adalah platform terpercaya yang dirancang khusus
                untuk membantu Anda menemukan tukang sesuai dengan keahlian dan
                spesialisasinya. Dengan menyediakan platform lengkap dan mudah
                digunakan, kami berkomitmen untuk memudahkan Anda dalam segala
                aspek membangun, memperbaiki, dan merenovasi rumah.
              </p>{" "}
              <p className="mb-5">
                Melalui KangTukang.com, Anda dapat dengan mudah mencari tukang
                yang tepat untuk proyek Anda. Dengan berbagai kategori keahlian
                yang tersedia, termasuk tukang bangunan, tukang listrik, tukang
                cat, dan banyak lagi, kami memastikan bahwa Anda dapat menemukan
                profesional berkualitas yang sesuai dengan kebutuhan spesifik
                Anda.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Maps */}
      <section id="maps">
        <Container className="py-5 px-3">
          <Row>
            <Col md={12}>
              <h5>Lokasi Kantor KangTukang</h5>
              <small>
                Jl. D.I. Panjaitan Blok B-6 Batu 7, Tanjungpinang Timur
              </small>
            </Col>
          </Row>
          <Row>
            <Col md={6} className="my-4">
              <Ratio aspectRatio="16x9">
                <embed
                  src="https://maps.google.com/maps?q=Indonesia&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
                  type=""
                />
              </Ratio>
            </Col>
            <Col md={6} className="mt-4">
              <h4>Tertarik dengan KangTukang ?</h4>
              <p>
                Sekali klik saja, Anda bisa menemukan tukang yang Anda butuhkan.
              </p>
              <Link className="btn-CariTukang rounded py-2 ms-0" to="#">
                Cari Tukang
              </Link>
              <Link className="btn-JadiMitra rounded py-2" to="#">
                Jadi Mitra
              </Link>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer */}
      <FooTer />
    </>
  );
}
