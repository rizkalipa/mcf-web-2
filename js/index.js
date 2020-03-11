$(function () {
  $('[data-toggle="popover"]').popover()
})

let initProgress = 7,
  initVal = 0;

let submitData = {
  kondisi: 'Baru',
  merk: 'Yamaha',
  type: 'Matic',
  subType: 'Mio Soul',
  tahunProduksi: 2020,
  hargaMotor: 0,
  dpMotor: 0,
  durasiTenor: 0,
  namaLengkap: '',
  tempatTglLahir: '',
  noHandphone: '',
  noTelepon: '',
  provinsi: '',
  kota: '',
  kecamatan: '',
  kodePos: '',
  alamat: '',
  fileKTP: ''
};

let formQuestion = [
  `
    <div id="question-2" class="submit-question-container p-2">
                <div class="submit-question">
                  <p class="text-white h4 m-0 mb-4">Pilih merk motor yang diinginkan</p>
                  <div class="d-flex flex-column align-items-center">
                    <button type="button" class="btn btn-primary my-2" name="merk">Yamaha</button>
                    <button type="button" class="btn btn-primary my-2" name="merk">Honda</button>
                    <button type="button" class="btn btn-primary my-2" name="merk">Kawasaki</button>
                    <button type="button" class="btn btn-primary my-2" name="merk">Suzuki</button>
                  </div>
                </div>
              </div>
`,
  `
    <div id="question-3" class="submit-question-container p-2">
                <div class="submit-question">
                  <p class="text-white h4 m-0 mb-4">Pilih type motor yang diinginkan</p>
                  <div class="grid-button">
                    <button type="button" class="btn btn-primary my-2" name="type">Matic</button>
                    <button type="button" class="btn btn-primary my-2" name="type">Moped</button>
                    <button type="button" class="btn btn-primary my-2" name="type">Maxi Yamaha</button>
                    <button type="button" class="btn btn-primary my-2" name="type">Monster Energy</button>
                    <button type="button" class="btn btn-primary my-2" name="type">Naked Bike</button>
                    <button type="button" class="btn btn-primary my-2" name="type">CBU</button>
                    <button type="button" class="btn btn-primary my-2" name="type">Sport</button>
                    <button type="button" class="btn btn-primary my-2" name="type">ATV</button>
                    <button type="button" class="btn btn-primary my-2" name="type">Off Road</button>
                    <button type="button" class="btn btn-primary my-2" name="type">Power Product</button>
                  </div>
                </div>
              </div>
`,
  `
    <div id="question-4" class="submit-question-container p-2">
                <div class="submit-question">
                  <p class="text-white h4 m-0 mb-4">Pilih sub-type motor yang diinginkan</p>
                  <div class="d-flex flex-column align-items-center">
                    <select id="subType" class="form-control my-2 w-50" name="subType">
                        <option value="Freego S Version">Freego S Version</option>
                    </select>
                    <button type="button" class="btn btn-primary my-2">Next</button>
                  </div>
                </div>
              </div>
`,
  `
    <div id="question-5" class="submit-question-container p-2">
                <div class="submit-question">
                  <p class="text-white h4 m-0 mb-4">Pilih tahun produksi motor yang diinginkan</p>
                  <div class="d-flex flex-column align-items-center">
                    <select class="form-control my-2 w-50" name="tahunProduksi" id="tahunProduksi">
                        <option value="2019">2019</option>
                        <option value="2020">2020</option>
                        <option value="2021">2021</option>
                    </select>
                    <button type="button" class="btn btn-primary my-2">Next</button>
                  </div>
                </div>
              </div>
`,
  `
    <div id="question-6" class="submit-question-container p-2">
                <div class="submit-question">
                  <p class="text-white h4 m-0 mb-4">Masukkan harga motor</p>
                  <div class="d-flex flex-column align-items-center">
                    <input type="text" class="form-control my-2 w-50" placeholder="Rp." name="hargaMotor" id="hargaMotor">
                    <button type="button" class="btn btn-primary my-2">Next</button>
                  </div>
                </div>
              </div>
`,
  `
    <div id="question-7" class="submit-question-container p-2">
                <div class="submit-question">
                  <p class="text-white h4 m-0 mb-4">DP motor yang telah dibayar</p>
                  <div class="d-flex flex-column align-items-center">
                    <input type="text" class="form-control my-2 w-50" placeholder="Rp." name="dpMotor" id="dpMotor">
                    <button type="button" class="btn btn-primary my-2">Next</button>
                  </div>
                </div>
              </div>
`,
  `
    <div id="question-8" class="submit-question-container p-2">
                <div class="submit-question">
                  <p class="text-white h4 m-0 mb-4">Pilih tenor diinginkan</p>
                  <div class="d-flex flex-column align-items-center">
                    <select class="form-control my-2 w-50" name="durasiTenor" id="durasiTenor">
                        <option value="6">6 Bulan</option>
                        <option value="12">12 Bulan</option>
                        <option value="17">17 Bulan</option>
                    </select>
                    <button type="button" class="btn btn-primary my-2">Next</button>
                  </div>
                </div>
              </div>
`,
  `
    <div id="question-9" class="submit-question-container p-2">
                <div class="submit-question">
                  <p class="text-white h4 m-0 mb-4">Masukkan nama lengkap</p>
                  <div class="d-flex flex-column align-items-center">
                    <input type="text" class="form-control my-2 w-50" placeholder="Isi nama anda..." name="namaLengkap" id="namaLengkap">
                    <button type="button" class="btn btn-primary my-2">Next</button>
                  </div>
                </div>
              </div>
`,
  `
    <div id="question-10" class="submit-question-container p-2">
                <div class="submit-question">
                  <p class="text-white h4 m-0 mb-4">Isi tempat dan tanggal lahir</p>
                  <div class="d-flex flex-column align-items-center">
                    <div class="form-row w-50 d-flex justify-content-center">
                        <div class="col">
                            <select class="form-control" id="tempatLahir">
                                <option value="Jakarta">Jakarta</option>
                            </select>
                        </div>
                        <div class="col">
                          <input class="form-control" type="date" id="tanggalLahir">
                        </div>
                    </div>
                    <button type="button" class="btn btn-primary my-2">Next</button>
                  </div>
                </div>
              </div>
`,
  `
    <div id="question-11" class="submit-question-container p-2">
                <div class="submit-question">
                  <p class="text-white h4 m-0 mb-4">Masukkan nomor handphone</p>
                  <div class="d-flex flex-column align-items-center">
                    <div class="form-row w-50 d-flex justify-content-center">
                        <div class="col-2">
                          <input class="form-control" type="text" value="+62" id="noHandphone-1">
                        </div>
                        <div class="col-10">
                          <input class="form-control" type="text" id="noHandphone-2">
                        </div>
                    </div>
                    <button type="button" class="btn btn-primary my-2">Next</button>
                  </div>
                </div>
              </div>
`,
  `
    <div id="question-12" class="submit-question-container p-2">
                <div class="submit-question">
                  <p class="text-white h4 m-0 mb-4">Masukkan nomor telepon</p>
                  <div class="d-flex flex-column align-items-center">
                    <div class="form-row w-50 d-flex justify-content-center">
                        <div class="col-2">
                            <select class="form-control" id="noTelepon-1">
                                <option value="021">021</option>
                            </select>
                        </div>
                        <div class="col-10">
                          <input class="form-control" type="text" id="noTelepon-2">
                        </div>
                    </div>
                    <button type="button" class="btn btn-primary my-2">Next</button>
                  </div>
                </div>
              </div>
`,
  `
    <div id="question-13" class="submit-question-container p-2">
      <div class="submit-question">
        <p class="text-white h4 m-0 mb-4">Isi alamat sesuai KTP</p>
        <div class="d-flex flex-column align-items-center">
          <textarea class="form-control w-50 mb-2" col=5 row=5 id="alamat"></textarea>
          <div class="form-row w-50 d-flex justify-content-center mb-2">
              <div class="col-md-6 p-0 pr-2">
                  <select class="form-control" id="provinsi">
                      <option value="DKI Jakarta">DKI Jakarta</option>
                  </select>
              </div>
              <div class="col-md-6 p-0">
                  <select class="form-control" id="kota">
                      <option value="Jakarta Pusat">Jakarta Pusat</option>
                  </select>
              </div>
          </div>
          <div class="form-row w-50 d-flex justify-content-center">
              <div class="col-md-6 p-0 pr-2">
                  <select class="form-control" id="kecamatan">
                      <option value="Gambir">Gambir</option>
                  </select>
              </div>
              <div class="col-md-6 p-0">
                  <select class="form-control" id="kodePos">
                      <option value="14450">14450</option>
                  </select>
              </div>
          </div>
          <button type="button" class="btn btn-primary my-2">Next</button>
        </div>
      </div>
    </div>
`,
  `
    <div id="question-14" class="submit-question-container p-2">
                <div class="submit-question">
                  <p class="text-white h4 m-0 mb-4">Upload KTP</p>
                  <div class="d-flex flex-column align-items-center">
                    <div class="custom-file my-2 w-50">
                      <input type="file" class="custom-file-input" id="fileKTP">
                      <label class="custom-file-label" for="fileKTP">Choose file</label>
                    </div>
                    <button type="button" class="btn btn-primary my-2">Next</button>
                  </div>
                </div>
              </div>
`,
];

function fillForm(submitData) {
  return `
  <div class="position-relative d-flex flex-column justify-content-between w-100"
            style="z-index: 9; min-height: inherit; overflow-y: auto;">
  <div id="question-15" class="submit-question-container p-4 text-white w-75 m-auto">
                <p class="text-white text-center h4 m-0 mb-5">Periksa kembali data yang telah dimasukkan</p>
                <p class="text-center bg-danger p-2 mb-5 text-white rounded">Data Pengajuan</p>
                <!-- Data Pengajuan -->
                <div class="form-row">
                  <div class="form-group col-md-5">
                    <label for="pengajuan-kredit" class="mb-2">Pengajuan Kredit</label>
                    <input type="text" class="form-control" name="" value="">
                  </div>
                  <div class="col-md-2"></div>
                  <div class="form-group col-md-5">
                    <label for="tahun" class="mb-2">Tahun</label>
                    <select name="" class="form-control">
                      <option value="2019" ${ submitData['tahunProduksi'] == '2019' ? 'selected' : ''}>2019</option>
                      <option value="2020" ${ submitData['tahunProduksi'] == '2020' ? 'selected' : ''}>2020</option>
                      <option value="2021" ${ submitData['tahunProduksi'] == '2021' ? 'selected' : ''}>2021</option>
                    </select>
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group col-md-5">
                    <label for="knodisi-motor" class="mb-2">Kondisi motor</label>
                    <select name="" class="form-control">
                      <option value="Baru" ${ submitData['kondisi'] == 'Baru' ? 'selected' : ''}>Baru</option>
                      <option value="Bekas" ${ submitData['kondisi'] == 'Bekas' ? 'selected' : ''}>Bekas</option>
                    </select>
                  </div>
                  <div class="col-md-2"></div>
                  <div class="form-group col-md-5">
                    <label for="hargaMotor" class="mb-2">Harga Motor</label>
                    <input type="text" class="form-control" placeholder="Rp ..." value="${ submitData['hargaMotor']}">
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group col-md-5">
                    <label for="merk" class="mb-2">Merk</label>
                    <select name="" id="merk" class="form-control">
                      <option value="Honda" ${ submitData['merk'] == 'Honda' ? 'selected' : ''}>Honda</option>
                      <option value="Yamaha" ${ submitData['merk'] == 'Yamaha' ? 'selected' : ''}>Yamaha</option>
                      <option value="Yamaha" ${ submitData['merk'] == 'Kawasaki' ? 'selected' : ''}>Kawasaki</option>
                      <option value="Yamaha" ${ submitData['merk'] == 'Suzuki' ? 'selected' : ''}>Suzuki</option>
                    </select>
                  </div>
                  <div class="col-md-2"></div>
                  <div class="form-group col-md-5">
                    <label for="dpMotor" class="mb-2">DP motor</label>
                    <select name="" class="form-control">
                      <option value="3000000" ${ submitData['dpMotor'] == '3000000' ? 'selected' : ''}>Rp 3.000.000</option>
                      <option value="5000000" ${ submitData['dpMotor'] == '5000000' ? 'selected' : ''}>Rp 5.000.000</option>
                      <option value="1000000" ${ submitData['dpMotor'] == '1000000' ? 'selected' : ''}>Rp 10.000.000</option>
                    </select>
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group col-md-5">
                    <label for="type" class="mb-2">Tipe motor</label>
                    <select name="" id="type" class="form-control">
                      <option value="Matic" ${ submitData['merk'] == 'Matic' ? 'selected' : ''}>Matic</option>
                      <option value="Maxi Yamaha" ${ submitData['merk'] == 'Maxi Yamaha' ? 'selected' : ''}>Maxi Yamaha</option>
                      <option value="Sport" ${ submitData['merk'] == 'Sport' ? 'selected' : ''}>Sport</option>
                      <option value="Moped" ${ submitData['merk'] == 'Moped' ? 'selected' : ''}>Moped</option>
                      <option value="CBU" ${ submitData['merk'] == 'CBU' ? 'selected' : ''}>CBU</option>
                      <option value="ATV" ${ submitData['merk'] == 'ATV' ? 'selected' : ''}>ATV</option>
                      <option value="Power Product" ${ submitData['merk'] == 'Power Product' ? 'selected' : ''}>Power Product</option>
                      <option value="Naked Bike" ${ submitData['merk'] == 'Naked Bike' ? 'selected' : ''}>Naked Bike</option>
                      <option value="Monster Energy" ${ submitData['merk'] == 'Monster Energy' ? 'selected' : ''}>Monster Energy</option>
                    </select>
                  </div>
                  <div class="col-md-2"></div>
                  <div class="form-group col-md-5">
                    <label for="durasiTenor" class="mb-2">Tenor</label>
                    <select name="" id="durasiTenor" class="form-control">
                      <option value="6" ${ submitData['durasiTenor'] == '6' ? 'selected' : ''}>6 Bulan</option>
                      <option value="12" ${ submitData['durasiTenor'] == '12' ? 'selected' : ''}>12 Bulan</option>
                      <option value="17" ${ submitData['durasiTenor'] == '17' ? 'selected' : ''}>17 Bulan</option>
                    </select>
                  </div>
                </div>

                <p class="text-center bg-danger p-2 text-white rounded mt-4 mb-5">Data Pribadi</p>

                <!-- Data Pribadi -->
                <div class="form-row">
                  <div class="form-group col-md-5">
                    <label for="namaLengkap" class="mb-2">Nama Lengkap</label>
                    <input type="text" class="form-control" name="" value="${ submitData['namaLengkap']}">
                  </div>
                  <div class="col-md-2"></div>
                  <div class="form-group col-md-5">
                    <label for="provinsi" class="mb-2">Provinsi</label>
                    <select name="" id="provinsi" class="form-control">
                      <option value="DKI Jakarta">DKI Jakarta</option>
                    </select>
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group col-md-5">
                    <label for="tempat-tanggal-lahir" class="mb-2">Tempat, Tanggal Lahir</label>
                    <div class="form-row">
                      <div class="col">
                        <input type="text" name="tanggal" value="${ submitData['tempatTglLahir']}" class="form-control">
                      </div>
                    </div>
                  </div>
                  <div class="col-md-2"></div>
                  <div class="form-group col-md-5">
                    <label for="kota" class="mb-2">Kota</label>
                    <select name="kota" id="kota" class="form-control">
                      <option value="Jakarta Pusat">Jakarta Pusat</option>
                    </select>
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group col-md-5">
                    <label for="no-handphone" class="mb-2">No Handphone</label>
                    <input type="text" class="form-control" value="${ submitData['noHandphone']}">
                  </div>
                  <div class="col-md-2"></div>
                  <div class="form-group col-md-5">
                    <label for="kecamatan" class="mb-2">Kecamatan</label>
                    <select name="" id="kecamatan" class="form-control">
                      <option value="Gambir">Gambir</option>
                    </select>
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group col-md-5">
                    <label for="no-telepon" class="mb-2">No Telepon</label>
                    <div class="form-row">
                      <div class="col-md-12">
                        <input type="text" class="form-control" value="${ submitData['noTelepon']}">
                      </div>
                    </div>
                  </div>
                  <div class="col-md-2"></div>
                  <div class="form-group col-md-5">
                    <label for="kode-pos" class="mb-2">Kode Pos</label>
                    <select name="" id="kodePos" class="form-control">
                      <option value="14240">14240</option>
                    </select>
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group col-md-5">
                    <label for="jenis-identitas" class="mb-2">Kartu Identitas</label>
                    <div class="form-row">
                      <div class="col-md-3">
                        <input type="text" class="form-control" id="jenis-identitas" placeholder="(KTP)">
                      </div>
                      <div class="col-md-9">
                        <input type="text" class="form-control" id="nomor-identitas" placeholder="Nomor Identitas">
                      </div>
                    </div>
                  </div>
                  <div class="col-md-2"></div>
                  <div class="form-group col-md-5">
                    <label for="alamat" class="mb-2">Alamat</label>
                    <textarea name="" cols="30" rows="5" class="form-control">${ submitData['alamat'] }</textarea>
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group col-md-5">
                    <label for="pekerjaan" class="mb-2">Pekerjaan</label>
                    <select name="" id="pekerjaan" class="form-control">
                      <option value="">Karyawan Swasta</option>
                    </select>
                  </div>
                  <div class="col-md-2"></div>
                  <div class="form-group col-md-5">
                    <label for="pekerjaan" class="mb-2">Upload Foto KTP</label>
                    <div class="custom-file">
                      <input type="file" class="custom-file-input" id="fileKTP">
                      <label class="custom-file-label" for="fileKTP">Choose file</label>
                    </div>
                  </div>
                </div>

                <div class="form-row mt-4">
                  <div class=" form-group col-md-12 d-flex flex-column justify-content-around m-0">
                    <div class="form-group m-0">
                      <input type="checkbox" id="setuju-1">
                      <label for="setuju-1" class="approval">Saya setuju dan bersedia menerima informasi</label>
                    </div>
                    <div class="form-group m-0">
                      <input type="checkbox" name="" id="setuju-2">
                      <label for="setuju-2" class="approval">Saya setuju dengan syarat dan ketentuan Mega Central
                        Finance</label>
                    </div>
                    <div class="form-group m-0">
                      <input type="checkbox" name="" id="setuju-2">
                      <label for="setuju-2" class="approval">Data diatas merupakan data saya dan diisi dengan
                        sebenar-benarnya</label>
                    </div>
                  </div>
                </div>

                <div class="form-row mt-4">
                  <div class="col-md-12">
                    <button class="btn btn-primary px-4">Submit</button>
                  </div>
                </div>
                
              </div>  
              </div>
`
}

function finishLoad() {
  return `
  <div class="position-relative d-flex flex-column justify-content-center align-items-center"
            style="z-index: 9; min-height: inherit; overflow-y: auto;">
    <p class="h4 mt-4 text-center" style="color: inherit">Pengajuan anda berhasil di submit</p>        
    <button class="btn btn-primary px-4" data-dismiss="modal">Kembali</button>  
  </div>
  <div class="p-2 w-100" style="bottom: 0; position: relative; z-index: 9;">
          </div>`;
}

function loadSubmit(initProgress) {

  return `
  <div class="position-relative d-flex flex-column justify-content-center w-100"
            style="z-index: 9; min-height: inherit; overflow-y: auto;">
    <p class="h4 mt-4 text-center" style="color: inherit">Upload your submit...</p>          
  </div>
  <div class="p-2 w-100" style="bottom: 0; position: relative; z-index: 9;">
            <div class="progress">
              <div class="progress-bar" role="progressbar" style="width: ${ initProgress }%" aria-valuenow="0" aria-valuemin="0"
                aria-valuemax="100"></div>
            </div>
          </div>`;
}

function karirForm() {
  return `
    <form class="w-50 mt-3">
      <div class="form-group">
        <label for="nama">Nama Lengkap</label>
        <input type="text" class="form-control" id="nama" placeholder="">
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" class="form-control" id="email" placeholder="">
      </div>
      <div class="form-group">
        <label for="umur">Umur</label>
        <input type="number" class="form-control" id="umur" placeholder="">
      </div>
      <div class="form-group">
        <label for="gaji">Gaji Yang Diharapkan</label>
        <input type="number" class="form-control" id="gaji" placeholder="">
      </div>
      <div class="form-group">
        <label for="upload-cv">Upload CV</label>
        <input type="file" id="upload-cv" placeholder=""></br>
        <snall class="text-muted">CV harus berupa file pdf</small>
      </div>
      <button type="button" class="btn btn-primary">Submit</button>
    </form>
  `
}

function loadingAnimate(element) {
  $(element).fadeOut(200, 'swing', function () {
    $(this).empty();
    initProgress = 0;
    $(this).fadeIn(200).html(loadSubmit(0));

    setInterval(function () {
      if (initProgress >= 100) {
        clearInterval()
      } else {
        $('.progress-bar').css({
          'width': (initProgress + 1) + '%'
        })

        initProgress++;
      }
    }, 10);

    setTimeout(function () {
      $(element).fadeOut(200, 'swing', function () {
        $(element).empty();
        $(element).fadeIn(200).html(finishLoad());
      });
    }, 2000)
  });
}

// Declare variable for get DOM id
const modalQuestion = document.getElementById('modal-question');

if (modalQuestion != null) {
  document.getElementById('modal-question').addEventListener('click', function (e) {
    if (e.target.classList.contains('btn')) {

      // Get parent node with id = "question-(n+)""
      id = e.target.parentNode.parentNode.parentNode.id;
      id = id.split("-");
      id = parseInt(id[1]);
      initProgress += 7;
      initVal++;

      if (e.target.textContent !== 'Next') {
        submitData[e.target.getAttribute('name')] = e.target.textContent;
      }

      if (initVal > 13) {
        if (e.target.textContent !== 'Submit') {

          // If form is end, create summarize submit
          submitData['subType'] = document.getElementById('subType').value;
          submitData['tahunProduksi'] = document.getElementById('tahunProduksi').value;
          submitData['hargaMotor'] = document.getElementById('hargaMotor').value;
          submitData['dpMotor'] = document.getElementById('dpMotor').value;
          submitData['durasiTenor'] = document.getElementById('durasiTenor').value;
          submitData['namaLengkap'] = document.getElementById('namaLengkap').value;
          submitData['tempatTglLahir'] = document.getElementById('tempatLahir').value + ', ' + document.getElementById('tanggalLahir').value;
          submitData['noHandphone'] = document.getElementById('noHandphone-1').value + ' ' + document.getElementById('noHandphone-2').value;
          submitData['noTelepon'] = document.getElementById('noTelepon-1').value + ' ' + document.getElementById('noTelepon-2').value;
          submitData['provinsi'] = document.getElementById('provinsi').value;
          submitData['kota'] = document.getElementById('kota').value;
          submitData['kecamatan'] = document.getElementById('alamat').value;
          submitData['kodePos'] = document.getElementById('kodePos').value;
          submitData['fileKTP'] = document.getElementById('fileKTP').value;

          // Change form question with jquery effect
          $('#modal-question').fadeOut(200, 'swing', function () {
            $(this).empty();
            $(this).fadeIn(200).html(fillForm(submitData));
          });
        } else {

          // If done, clear ui and add loading animation
          loadingAnimate('#modal-question');
        }
      } else {
        // Change form question with jquery effect
        $('#modal-question').fadeOut(200, 'swing', function () {
          $('#question-' + (id)).hide();
          $('#modal-question').fadeIn(200).find('#question-' + (id)).after(formQuestion[id - 1]);
        });
      }

      $('.progress-bar').css({
        'width': initProgress + '%'
      })
    }
  })
}

const karirTable = document.getElementById('karir-table');

if (karirTable != null) {
  document.getElementById('karir-table').addEventListener('click', function (e) {
    if (e.target.textContent == 'Apply Now') {
      let parent = e.target.parentNode.parentNode;
      $(parent).find('.collapse').removeClass('show');

      $(parent).fadeOut(200, 'swing', function () {
        $(this).fadeIn(200, 'swing');
        $(this).find('form').remove();
        $(this).find('td').first().append(karirForm());
      });
    }
  });

  document.getElementById('karir-table').addEventListener('click', function (e) {
    if (e.target.textContent == 'Submit') {
      let parent = e.target.parentNode;
      loadingAnimate(parent);
    }
  });
}

$('#btnHitung').click(function (e) {
  let parent = e.target.parentNode.parentNode.parentNode.parentNode;
  let estimasiString = `
    <div class="card">
        <div class="card-body text-center">
            <h3><b>Estimasi Angsuran Anda</b></h3>
            <h3>Rp. 3.456.500 /bulan</h3>
            <p>
                Perhitungan ini hanya bersifat sementara dan dapat berubah sesuai dengan
                ketentuan MCF MAF. Ajukan pembiayaan Anda kemudian kami akan menghubungi untuk
                detail lebih lanjut
            </p>
        </div>
    </div>
  `;

  $(parent).next().remove();
  $(parent).after(estimasiString);
})