import { Component, ViewChild, ElementRef, Input } from '@angular/core';
import { } from '@types/googlemaps';
import { MapMarkerModel } from '../../../models';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'gmap',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss']
})

export class MapComponent {
    @ViewChild('gmap') gmapElement: ElementRef;
    map: google.maps.Map;
    @Input()
    markers: MapMarkerModel[];

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
        this.markers.forEach(marker => {
            let gMarker = new google.maps.Marker({
                position: { lat: marker.lat, lng: marker.lng },
                map: this.map,
                title: ''
            });
            gMarker.setMap(this.map);
        });     
    }
}
