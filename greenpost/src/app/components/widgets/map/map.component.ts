import { Component, ViewChild, ElementRef } from '@angular/core';
import { } from '@types/googlemaps';

@Component({
  selector: 'gmap',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss']
})

export class MapComponent {
    @ViewChild('gmap') gmapElement: ElementRef;
    map: google.maps.Map;

    ngOnInit() {
        var mapProp = {
            center: new google.maps.LatLng(50.40672823, 30.46941419),
            zoom: 13,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
        var flightPlanCoordinates = [
            { lat: 50.41672823, lng: 30.51941419 },
            { lat: 50.40644517, lng: 30.52044416 }
        ];
        var flightPath = new google.maps.Polyline({
            path: flightPlanCoordinates,
            geodesic: true,
            strokeColor: '#2222EE',
            strokeOpacity: 0.8,
            strokeWeight: 2
        });
        flightPath.setMap(this.map);
        flightPlanCoordinates = [
            { lat: 50.40644517, lng: 30.52044416 },
            { lat: 50.39814658, lng: 30.41647455 }
        ];
        flightPath = new google.maps.Polyline({
            path: flightPlanCoordinates,
            geodesic: true,
            strokeColor: '#22EE22',
            strokeOpacity: 0.8,
            strokeWeight: 2
        });
        flightPath.setMap(this.map);
        flightPlanCoordinates = [
            { lat: 50.39814658, lng: 30.41647455 },
            { lat: 50.41674994, lng: 30.39375557 }
        ];
        flightPath = new google.maps.Polyline({
            path: flightPlanCoordinates,
            geodesic: true,
            strokeColor: '#AAAAAA',
            strokeOpacity: 0.8,
            strokeWeight: 2
        });
        flightPath.setMap(this.map);


        /////Map markers
        var LatLng = {lat: 50.429108, lng: 30.593034};
        var marker = new google.maps.Marker({
            position: LatLng,
            map: this.map,
            title: 'Hello World!'
        });
        var LatLngTroya = {lat: 50.523171, lng: 30.607346};
        var markerTroya = new google.maps.Marker({
            position: LatLngTroya,
            map: this.map,
            title: 'Troya'
        });
        var LatLngTeatralna = {lat: 50.445158,lng: 30.518164};
        var markerTeatalna = new google.maps.Marker({
            position: LatLngTeatralna,
            map: this.map,
            title: 'Teatralna'
        });
        var LatLngOceanPlaza = {lat: 50.411335,lng: 30.526813};
        var markerOceanPlaza = new google.maps.Marker({
            position: LatLngOceanPlaza,
            map: this.map,
            title: 'OceanPlaz'
        });
        marker.setMap(this.map);
        markerTeatalna.setMap(this.map);
        markerTroya.setMap(this.map);
        markerOceanPlaza.setMap(this.map);
    }
}
