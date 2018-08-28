@extends('layout')

@section('body')
    <div>
        @foreach($games as $game)
            <div>{{$game->title}}</div>
            <div>{{$game->developer}}</div>
            <div>{{$game->publisher}}</div>
            <div>{{$game->release_year}}</div>
            <div>{{$game->release_date}}</div>
            <div>{{$game->game_time}}</div>
            <div>{{$game->popularity}}</div>
            <div>{{$game->difficulty}}</div>
            <div>{{$game->requirements}}</div>
            <div>{!! $game->requirements_detail !!}</div>
            <div>{{$game->rating_avg}}</div>
            <div>{{$game->age_rating}}</div>
            <div>{{$game->slug}}</div>
            <div><h3>Kategorie</h3></div>
            <ul>
            @foreach($game->genres as $genre)
                <li>{{$genre->name}}</li>
            @endforeach
            </ul>
        @endforeach
    </div>
@endsection