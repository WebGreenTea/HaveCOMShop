<template>
  <div>
    <p>/*test*/</p>
    <h4>CPU socket{{ CPUsocket }}</h4>
    <h4>mainboard socket{{ MBsocket }}</h4>
    <h4>mainboard DIMM{{ mbDIMM }}</h4>
    <h4>ram DIMM{{ ramDIMM }}</h4>
  </div>
  <div class="container mt-5">
    <div class="row">
      <div class="w-25">
        <div
          class="nav flex-column nav-pills"
          id="v-pills-tab"
          role="tablist"
          aria-orientation="vertical"
        >
          <!--cpu-->
          <a
            class="nav-link bg-dark text-light active"
            id="v-pills-cpu-tab"
            data-toggle="pill"
            href="#v-pills-cpu"
            role="tab"
            aria-controls="v-pills-cpu"
            aria-selected="true"
            @click="updateShowCPU"
          >
            <div>
              <div class="d-flex justify-content-center"><h3>CPU</h3></div>
            </div>
          </a>
          <div v-if="selectCPU" class="border border-secondary rounded mb-2">
            <h6 class="card-title mb-1">{{ selectCPU.PDname }}</h6>
            <div class="row">
              <div class="col-md-5">
                <img :src="selectCPU.img" alt="" class="w-100" />
              </div>

              <div>
                <h5 class="card-text" id="price">
                  {{ selectCPU.price.toLocaleString() }} THB
                </h5>
                <h6 class="card-text" id="price">
                  {{ priceInBTC(selectCPU.price).toLocaleString() }} BTC
                </h6>
              </div>
              <div class="ml-2 d-flex align-items-end">
                <button class="btn btn-danger" @click="delCpu">X</button>
              </div>
            </div>
          </div>

          <!--mainboard-->
          <a
            class="nav-link bg-dark text-light mt-1"
            id="v-pills-Mainboard-tab"
            data-toggle="pill"
            href="#v-pills-Mainboard"
            role="tab"
            aria-controls="v-pills-Mainboard"
            aria-selected="false"
            @click="updateShowMainboard"
          >
            <div class="d-flex justify-content-center">
              <h3>Mainboard</h3>
            </div>
          </a>
          <div>
            <div
              v-if="selectMainboard"
              class="border border-secondary rounded mb-2"
            >
              <h6 class="card-title mb-1">{{ selectMainboard.PDname }}</h6>
              <div class="row">
                <div class="col-md-5">
                  <img :src="selectMainboard.img" alt="" class="w-100" />
                </div>
                <div>
                  <h5 class="card-text" id="price">
                    {{ selectMainboard.price.toLocaleString() }} THB
                  </h5>
                  <h6 class="card-text" id="price">
                    {{ priceInBTC(selectMainboard.price).toLocaleString() }}
                    BTC
                  </h6>
                </div>
                <div class="ml-2 d-flex align-items-end">
                  <button class="btn btn-danger" @click="delMainboard">
                    X
                  </button>
                </div>
              </div>
            </div>
          </div>
          <!--ram-->
          <a
            class="nav-link bg-dark text-light mt-1"
            id="v-pills-ram-tab"
            data-toggle="pill"
            href="#v-pills-ram"
            role="tab"
            aria-controls="v-pills-ram"
            aria-selected="false"
            @click="updateShowRam"
          >
            <div class="d-flex justify-content-center">
              <h3>Ram</h3>
            </div>
          </a>
          <div>
            <div v-if="selectRam" class="border border-secondary rounded mb-2">
              <h6 class="card-title mb-1">{{ selectRam.PDname }}</h6>
              <div class="row">
                <div class="col-md-5">
                  <img :src="selectRam.img" alt="" class="w-100" />
                </div>
                <div>
                  <h5 class="card-text" id="price">
                    {{ selectRam.price.toLocaleString() }} THB
                  </h5>
                  <h6 class="card-text" id="price">
                    {{ priceInBTC(selectRam.price).toLocaleString() }}
                    BTC
                  </h6>
                </div>
                <div class="ml-2 d-flex align-items-end">
                  <button class="btn btn-danger" @click="delRam">X</button>
                </div>
              </div>
            </div>
          </div>
          <!--vga-->
          <a
            class="nav-link bg-dark text-light mt-1"
            id="v-pills-vga-tab"
            data-toggle="pill"
            href="#v-pills-vga"
            role="tab"
            aria-controls="v-pills-vga"
            aria-selected="false"
          >
            <div class="d-flex justify-content-center">
              <h3>VGA</h3>
            </div>
          </a>
          <div>
            <div v-if="selectVGA" class="border border-secondary rounded mb-2">
              <h6 class="card-title mb-1">{{ selectVGA.PDname }}</h6>
              <div class="row">
                <div class="col-md-5">
                  <img :src="selectVGA.img" alt="" class="w-100" />
                </div>
                <div>
                  <h5 class="card-text" id="price">
                    {{ selectVGA.price.toLocaleString() }} THB
                  </h5>
                  <h6 class="card-text" id="price">
                    {{ priceInBTC(selectVGA.price).toLocaleString() }}
                    BTC
                  </h6>
                </div>
                <div class="ml-2 d-flex align-items-end">
                  <button class="btn btn-danger" @click="delVga">X</button>
                </div>
              </div>
            </div>
          </div>
          <!--storage-->
          <a
            class="nav-link bg-dark text-light mt-1"
            id="v-pills-storage-tab"
            data-toggle="pill"
            href="#v-pills-storage"
            role="tab"
            aria-controls="v-pills-storage"
            aria-selected="false"
          >
            <div class="d-flex justify-content-center">
              <h3>Storage</h3>
            </div>
          </a>
          <div>
            <div
              v-if="selectStorage"
              class="border border-secondary rounded mb-2"
            >
              <h6 class="card-title mb-1">{{ selectStorage.PDname }}</h6>
              <div class="row">
                <div class="col-md-5">
                  <img :src="selectStorage.img" alt="" class="w-100" />
                </div>
                <div>
                  <h5 class="card-text" id="price">
                    {{ selectStorage.price.toLocaleString() }} THB
                  </h5>
                  <h6 class="card-text" id="price">
                    {{ priceInBTC(selectStorage.price).toLocaleString() }}
                    BTC
                  </h6>
                </div>
                <div class="ml-2 d-flex align-items-end">
                  <button class="btn btn-danger" @click="delStorage">X</button>
                </div>
              </div>
            </div>
          </div>
          <!--PSU-->
          <a
            class="nav-link bg-dark text-light mt-1"
            id="v-pills-psu-tab"
            data-toggle="pill"
            href="#v-pills-psu"
            role="tab"
            aria-controls="v-pills-psu"
            aria-selected="false"
          >
            <div class="d-flex justify-content-center">
              <h3>PSU</h3>
            </div>
          </a>
          <div>
            <div v-if="selectPSU" class="border border-secondary rounded mb-2">
              <h6 class="card-title mb-1">{{ selectPSU.PDname }}</h6>
              <div class="row">
                <div class="col-md-5">
                  <img :src="selectPSU.img" alt="" class="w-100" />
                </div>
                <div>
                  <h5 class="card-text" id="price">
                    {{ selectPSU.price.toLocaleString() }} THB
                  </h5>
                  <h6 class="card-text" id="price">
                    {{ priceInBTC(selectPSU.price).toLocaleString() }}
                    BTC
                  </h6>
                </div>
                <div class="ml-2 d-flex align-items-end">
                  <button class="btn btn-danger" @click="delPsu">X</button>
                </div>
              </div>
            </div>
          </div>
          <!--Case-->
          <a
            class="nav-link bg-dark text-light mt-1"
            id="v-pills-case-tab"
            data-toggle="pill"
            href="#v-pills-case"
            role="tab"
            aria-controls="v-pills-case"
            aria-selected="false"
          >
            <div class="d-flex justify-content-center">
              <h3>Case</h3>
            </div>
          </a>
          <div>
            <div v-if="selectCase" class="border border-secondary rounded mb-2">
              <h6 class="card-title mb-1">{{ selectCase.PDname }}</h6>
              <div class="row">
                <div class="col-md-5">
                  <img :src="selectCase.img" alt="" class="w-100" />
                </div>
                <div>
                  <h5 class="card-text" id="price">
                    {{ selectCase.price.toLocaleString() }} THB
                  </h5>
                  <h6 class="card-text" id="price">
                    {{ priceInBTC(selectCase.price).toLocaleString() }}
                    BTC
                  </h6>
                </div>
                <div class="ml-2 d-flex align-items-end">
                  <button class="btn btn-danger" @click="delCase">X</button>
                </div>
              </div>
            </div>
          </div>
          <!--cooler-->
          <a
            class="nav-link bg-dark text-light mt-1"
            id="v-pills-cooler-tab"
            data-toggle="pill"
            href="#v-pills-cooler"
            role="tab"
            aria-controls="v-pills-cooler"
            aria-selected="false"
          >
            <div class="d-flex justify-content-center">
              <h3>Cooler</h3>
            </div>
          </a>
          <div>
            <div
              v-if="selectCooler"
              class="border border-secondary rounded mb-2"
            >
              <h6 class="card-title mb-1">{{ selectCooler.PDname }}</h6>
              <div class="row">
                <div class="col-md-5">
                  <img :src="selectCooler.img" alt="" class="w-100" />
                </div>
                <div>
                  <h5 class="card-text" id="price">
                    {{ selectCooler.price.toLocaleString() }} THB
                  </h5>
                  <h6 class="card-text" id="price">
                    {{ priceInBTC(selectCooler.price).toLocaleString() }}
                    BTC
                  </h6>
                </div>
                <div class="ml-2 d-flex align-items-end">
                  <button class="btn btn-danger" @click="delCooler">X</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--SHOW-->
      <div class="w-75">
        <div class="tab-content border border-info" id="v-pills-tabContent">
          <!--CPU-->
          <div
            style="height: 800px"
            class="tab-pane fade show active overflow-auto"
            id="v-pills-cpu"
            role="tabpanel"
            aria-labelledby="v-pills-cpu-tab"
          >
            <div class="row">
              <div
                class="col-lg-3"
                v-for="(cpu, index) in showCPU"
                :key="index"
                @click="selCPU(cpu)"
              >
                <div class="card" v-if="cpu.count != 0">
                  <img :src="cpu.img" alt="" />
                  <div class="card-body">
                    <h6 class="card-title">{{ cpu.PDname }}</h6>
                    <h5 class="card-text" id="price">
                      {{ cpu.price.toLocaleString() }} THB
                    </h5>
                    <h6 class="card-text" id="price">
                      {{ priceInBTC(cpu.price) }}
                      <img
                        src="https://drive.google.com/uc?export=view&id=1ldi5YT6pk21W3SBj1dr0zggtlwPcKV3m"
                        style="max-width: 12%"
                      />
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--mainboard-->
          <div
            style="height: 800px"
            class="tab-pane fade"
            id="v-pills-Mainboard"
            role="tabpanel"
            aria-labelledby="v-pills-Mainboard-tab"
          >
            <div class="row">
              <div
                class="col-lg-3"
                v-for="(mainboard, index) in showMainboard"
                :key="index"
                @click="selmainboard(mainboard)"
              >
                <div class="card" v-if="mainboard.count != 0">
                  <img :src="mainboard.img" alt="" />
                  <div class="card-body">
                    <h6 class="card-title">{{ mainboard.PDname }}</h6>
                    <h5 class="card-text" id="price">
                      {{ mainboard.price.toLocaleString() }} THB
                    </h5>
                    <h6 class="card-text" id="price">
                      {{ priceInBTC(mainboard.price) }}
                      <img
                        src="https://drive.google.com/uc?export=view&id=1ldi5YT6pk21W3SBj1dr0zggtlwPcKV3m"
                        style="max-width: 12%"
                      />
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--ram-->
          <div
            style="height: 800px"
            class="tab-pane fade"
            id="v-pills-ram"
            role="tabpanel"
            aria-labelledby="v-pills-ram-tab"
          >
            <div class="row">
              <div
                class="col-lg-3"
                v-for="(ram, index) in showRam"
                :key="index"
                @click="selRam(ram)"
              >
                <div class="card" v-if="ram.count != 0">
                  <img :src="ram.img" alt="" />
                  <div class="card-body">
                    <h6 class="card-title">{{ ram.PDname }}</h6>
                    <h5 class="card-text" id="price">
                      {{ ram.price.toLocaleString() }} THB
                    </h5>
                    <h6 class="card-text" id="price">
                      {{ priceInBTC(ram.price) }}
                      <img
                        src="https://drive.google.com/uc?export=view&id=1ldi5YT6pk21W3SBj1dr0zggtlwPcKV3m"
                        style="max-width: 12%"
                      />
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--VGA-->
          <div
            style="height: 800px"
            class="tab-pane fade"
            id="v-pills-vga"
            role="tabpanel"
            aria-labelledby="v-pills-vga-tab"
          >
            <div class="row">
              <div
                class="col-lg-3"
                v-for="(vga, index) in showVGA"
                :key="index"
                @click="selVGA(vga)"
              >
                <div class="card" v-if="vga.count != 0">
                  <img :src="vga.img" alt="" />
                  <div class="card-body">
                    <h6 class="card-title">{{ vga.PDname }}</h6>
                    <h5 class="card-text" id="price">
                      {{ vga.price.toLocaleString() }} THB
                    </h5>
                    <h6 class="card-text" id="price">
                      {{ priceInBTC(vga.price) }}
                      <img
                        src="https://drive.google.com/uc?export=view&id=1ldi5YT6pk21W3SBj1dr0zggtlwPcKV3m"
                        style="max-width: 12%"
                      />
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--storage-->
          <div
            style="height: 800px"
            class="tab-pane fade"
            id="v-pills-storage"
            role="tabpanel"
            aria-labelledby="v-pills-storage-tab"
          >
            <div class="row">
              <div
                class="col-lg-3"
                v-for="(storage, index) in showStorage"
                :key="index"
                @click="selStorage(storage)"
              >
                <div class="card" v-if="storage.count != 0">
                  <img :src="storage.img" alt="" />
                  <div class="card-body">
                    <h6 class="card-title">{{ storage.PDname }}</h6>
                    <h5 class="card-text" id="price">
                      {{ storage.price.toLocaleString() }} THB
                    </h5>
                    <h6 class="card-text" id="price">
                      {{ priceInBTC(storage.price) }}
                      <img
                        src="https://drive.google.com/uc?export=view&id=1ldi5YT6pk21W3SBj1dr0zggtlwPcKV3m"
                        style="max-width: 12%"
                      />
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!--PSU-->
          <div
            style="height: 800px"
            class="tab-pane fade"
            id="v-pills-psu"
            role="tabpanel"
            aria-labelledby="v-pills-psu-tab"
          >
            <div class="row">
              <div
                class="col-lg-3"
                v-for="(psu, index) in showPSU"
                :key="index"
                @click="selPSU(psu)"
              >
                <div class="card" v-if="psu.count != 0">
                  <img :src="psu.img" alt="" />
                  <div class="card-body">
                    <h6 class="card-title">{{ psu.PDname }}</h6>
                    <h5 class="card-text" id="price">
                      {{ psu.price.toLocaleString() }} THB
                    </h5>
                    <h6 class="card-text" id="price">
                      {{ priceInBTC(psu.price) }}
                      <img
                        src="https://drive.google.com/uc?export=view&id=1ldi5YT6pk21W3SBj1dr0zggtlwPcKV3m"
                        style="max-width: 12%"
                      />
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!--Case-->
          <div
            style="height: 800px"
            class="tab-pane fade"
            id="v-pills-case"
            role="tabpanel"
            aria-labelledby="v-pills-case-tab"
          >
            <div class="row">
              <div
                class="col-lg-3"
                v-for="(Case, index) in showCase"
                :key="index"
                @click="selCase(Case)"
              >
                <div class="card" v-if="Case.count != 0">
                  <img :src="Case.img" alt="" />
                  <div class="card-body">
                    <h6 class="card-title">{{ Case.PDname }}</h6>
                    <h5 class="card-text" id="price">
                      {{ Case.price.toLocaleString() }} THB
                    </h5>
                    <h6 class="card-text" id="price">
                      {{ priceInBTC(Case.price) }}
                      <img
                        src="https://drive.google.com/uc?export=view&id=1ldi5YT6pk21W3SBj1dr0zggtlwPcKV3m"
                        style="max-width: 12%"
                      />
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!--cooler-->
          <div
            style="height: 800px"
            class="tab-pane fade"
            id="v-pills-cooler"
            role="tabpanel"
            aria-labelledby="v-pills-cooler-tab"
          >
            <div class="row">
              <div
                class="col-lg-3"
                v-for="(cooler, index) in showCooler"
                :key="index"
                @click="selCooler(cooler)"
              >
                <div class="card" v-if="cooler.count != 0">
                  <img :src="cooler.img" alt="" />
                  <div class="card-body">
                    <h6 class="card-title">{{ cooler.PDname }}</h6>
                    <h5 class="card-text" id="price">
                      {{ cooler.price.toLocaleString() }} THB
                    </h5>
                    <h6 class="card-text" id="price">
                      {{ priceInBTC(cooler.price) }}
                      <img
                        src="https://drive.google.com/uc?export=view&id=1ldi5YT6pk21W3SBj1dr0zggtlwPcKV3m"
                        style="max-width: 12%"
                      />
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!--<div class="container mt-5">
    <div class="row">
      <div class="w-25">
        <ul class="nav nav-pills nav-fill bg-dark">
          <li class="nav-item">
            <a href="" class="nav-link bg-dark text-light">
              <div class="card bg-dark" id="productArea">
                ภาพ

                <h6 class="card-title">name</h6>
                <h5 class="card-text" id="price">
                  price1
                </h5>
                <h6 class="card-text" id="price">
                  price2
                </h6>
              </div>
            </a>
          </li>
          <br>
          
        </ul>
      </div>
    </div>
  </div>-->
  <br />
  <!--<div class="container mt-5">
    <div class="row">
      <div class="w-25">
          <div >
              <div class="d-flex justify-content-center">
                  <h4>CPU</h4>
              </div>
              <div class="d-flex justify-content-center">
                  <p> name</p>
              </div>
              <div class="d-flex justify-content-center">
                  <img src="" alt="">
              </div>
              <div class="d-flex justify-content-center">
                  price
              </div>
          </div>
          <div>
              MainBoard
          </div>
          <div>
              RAM
          </div>
      </div>
      <div class="w-75">
          test
      </div>
    </div>
  </div>-->
</template>
<script>
import { MainURL } from "./js/MainUrl";
import axios from "axios";

export default {
  emits: ["set-nav", "update-cart"],
  props: ["Inlogin", "userID", "cart"],
  data() {
    return {
      btc: null,
      allCPU: [],
      allMainboard: [],
      allVGA: [],
      allRam: [],
      allStorage: [],
      allPSU: [],
      allCase: [],
      allCooler: [],

      showCPU: [],
      showMainboard: [],
      showVGA: [],
      showRam: [],
      showStorage: [],
      showPSU: [],
      showCase: [],
      showCooler: [],

      selectCPU: null,
      selectMainboard: null,
      selectRam: null,
      selectVGA: null,
      selectStorage: null,
      selectPSU: null,
      selectCase: null,
      selectCooler: null,

      CPUsocket: "",
      MBsocket: "",
      mbDIMM: "",
      ramDIMM: "",
    };
  },
  methods: {
    selCPU(select) {
      this.selectCPU = select;
      this.CPUsocket = select.detail.socket;
    },
    selmainboard(select) {
      this.selectMainboard = select;
      this.MBsocket = select.detail.socket;
      this.mbDIMM = select.detail.DIMM;
    },
    selRam(select) {
      this.selectRam = select;
      this.ramDIMM = select.detail.DIMM;
    },
    selVGA(select) {
      this.selectVGA = select;
    },
    selStorage(select) {
      this.selectStorage = select;
    },
    selPSU(select) {
      this.selectPSU = select;
    },
    selCase(select) {
      this.selectCase = select;
    },
    selCooler(select) {
      this.selectCooler = select;
    },

    delCpu() {
      this.selectCPU = null;
      this.CPUsocket = null;
    },
    delMainboard() {
      this.selectMainboard = null;
      this.MBsocket = null;
      this.mbDIMM = null;
    },
    delRam() {
      this.selectRam = null;
      this.ramDIMM = null;
    },
    delVga() {
      this.selectVGA = null;
    },
    delStorage() {
      this.selectStorage = null;
    },
    delPsu() {
      this.selectPSU = null;
    },
    delCase() {
      this.selectCase = null;
    },
    delCooler() {
      this.selectCooler = null;
    },
    updateShowCPU(){
        if(this.MBsocket){
            let socket = this.MBsocket
            let arr = []
            for (let cpu of this.allCPU){
                if(cpu.detail.socket === socket){
                    arr.push(cpu)
                }
            }
            this.showCPU = arr;
        }
        else{
            this.showCPU = this.allCPU;
        }
    },
    updateShowRam(){
        if(this.mbDIMM){
            let DIMM = this.mbDIMM;
            let arr = [];
            for(let ram of this.allRam){
                if(ram.detail.DIMM <= DIMM){
                    arr.push(ram)
                }
            }
            this.showRam = arr;
        }else{
            this.showRam = this.allRam;
        }
    },
    updateShowMainboard(){
        let socket = this.CPUsocket;
        let DIMM = this.ramDIMM;
        let arr = [];
        let arr2 = [];
        if(socket && DIMM){
            for(let mainboard of this.allMainboard){
                if(mainboard.detail.socket === socket){
                    arr.push(mainboard)
                }
            }
            for(let mainboard of arr){
                if(mainboard.detail.DIMM >= DIMM){
                    arr2.push(mainboard);
                }
            }
            this.showMainboard = arr2
        }else if(socket && !DIMM){
            for(let mainboard of this.allMainboard){
                if(mainboard.detail.socket === socket){
                    arr.push(mainboard)
                }
            }
            this.showMainboard = arr;
        }else if(!socket && DIMM){
            for(let mainboard of this.allMainboard){
                if(mainboard.detail.DIMM >= DIMM){
                    arr.push(mainboard)
                }
            }
            this.showMainboard = arr;
        }else{
            this.showMainboard = this.allMainboard
        }
    },
    priceInBTC(thb) {
      return (thb / this.btc).toFixed(7);
    },
    test(){
        alert(99)
    }
  },
  async created() {
    await axios.get("https://api.bitkub.com/api/market/ticker").then((res) => {
      this.btc = res.data.THB_BTC.last;
    });
    await axios
      .get(MainURL + "/product/getPD/CPU")
      .then((res) => {
        this.allCPU = res.data;
        this.showCPU = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
    await axios
      .get(MainURL + "/product/getPD/Mainboard")
      .then((res) => {
        this.allMainboard = res.data;
        this.showMainboard = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
    await axios
      .get(MainURL + "/product/getPD/RAM")
      .then((res) => {
        this.allRam = res.data;
        this.showRam = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
    await axios
      .get(MainURL + "/product/getPD/VGA")
      .then((res) => {
        this.allVGA = res.data;
        this.showVGA = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
    await axios
      .get(MainURL + "/product/getPD/HDD-SSD")
      .then((res) => {
        this.allStorage = res.data;
        this.showStorage = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
    await axios
      .get(MainURL + "/product/getPD/PSU")
      .then((res) => {
        this.allPSU = res.data;
        this.showPSU = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
    await axios
      .get(MainURL + "/product/getPD/Case")
      .then((res) => {
        this.allCase = res.data;
        this.showCase = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
    await axios
      .get(MainURL + "/product/getPD/cooler")
      .then((res) => {
        this.allCooler = res.data;
        this.showCooler = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
<style>
div {
  /*border: 1px solid red;*/
}
</style>