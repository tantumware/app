import { StorageKeys } from './../../utils/storage-keys';
import { Statistics } from './../../models/statistics';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { Chart } from 'chart.js';
import { EstatisticaProvider } from '../../providers/estatistica/estatistica';
import { TranslateService } from '@ngx-translate/core';

@IonicPage()
@Component({
    selector: 'page-statistics',
    templateUrl: 'statistics.html',
})
export class StatisticsPage {

    @ViewChild('doughnutCanvas') doughnutCanvas;
    @ViewChild('lineCanvas') lineCanvas;

    doughnutChart: any;
    lineChart: any;

    public statistic: Statistics;

    public semestersYears: any[] = [];

    public semesters: any;

    step: string = '1';

    constructor(public navCtrl: NavController,
        public navParams: NavParams,
        public estatisticaProvider: EstatisticaProvider,
        private storage: Storage,
        public translateService: TranslateService) {
    }

    ionViewDidLoad() {
        this.storage.get(StorageKeys.RESULT).then(res => {
            if (res) {
                for (var property in res) {
                    if (res.hasOwnProperty(property)) {
                        this.semestersYears.push(property);
                    }
                }
                this.semesters = res;
            }
        });

        this.storage.get(StorageKeys.STATISTIC).then(e => {
            if (e) {
                this.statistic = e;
                this.showDoughnutChart();
                this.showLineChart();
            }
        });

        this.estatisticaProvider.getEstatisticas()
            .map(res => res.json())
            .subscribe(e => {
                this.statistic = e;
                this.storage.set(StorageKeys.STATISTIC, e);
                this.showDoughnutChart();
                this.showLineChart();
            });
    }

    onStepChanged() {
    }

    getSubjects(semester: string) {
        return this.semesters[semester].subjects; 
    }

    showLineChart() {
        this.lineChart = new Chart(this.lineCanvas.nativeElement, {

            type: 'line',
            data: {
                labels: this.statistic.semesters,
                datasets: [
                    {
                        label: this.translateService.instant('YOUR_IA'),
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: "rgba(75,192,192,0.4)",
                        borderColor: "rgba(75,192,192,1)",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "rgba(75,192,192,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(75,192,192,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: this.statistic.semestersIA,
                        spanGaps: false,
                    },
                    {
                        label: this.translateService.instant('AVERAGE_COURSE_IA'),
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: "rgba(75,192,192,0.4)",
                        borderColor: "rgba(75,192,192,1)",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "rgba(75,192,192,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(75,192,192,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: this.statistic.courseIA,
                        spanGaps: false,
                    }

                ]
            }

        });
    }

    showDoughnutChart() {
        this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {

            type: 'doughnut',
            data: {
                labels: [this.translateService.instant('SEMESTERS_REMAINING'), this.translateService.instant('SEMESTERS_STUDIED')],
                datasets: [{
                    label: '# of Votes',
                    data: [this.semestersYears.length, this.statistic.semesters.length],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)'
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB"
                    ]
                }]
            }

        });
    }

    getClass(p: string): string {
        return this.step == p ? "" : "step-hidden";;
    }

}
