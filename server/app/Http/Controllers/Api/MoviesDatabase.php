<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController as BaseController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Http;

class MoviesDatabase extends BaseController
{
    public function trending()
    {
        $api_key = env("MOVIES_DB_API_KEY");

        return Http::get("https://api.themoviedb.org/3/trending/movie/day?api_key=$api_key&total_results=5");
    }
    public function get_genres()
    {
        $api_key = env("MOVIES_DB_API_KEY");

        return Http::get("https://api.themoviedb.org/3/genre/movie/list?api_key=$api_key");
    }
    public function week_trending($page)
    {
        $api_key = env("MOVIES_DB_API_KEY");

        return Http::get("https://api.themoviedb.org/3/trending/movie/week?api_key=$api_key&language=en-US&page=$page");
    }
    public function day_trending_people($page)
    {
        $api_key = env("MOVIES_DB_API_KEY");

        return Http::get("https://api.themoviedb.org/3/trending/person/day?api_key=$api_key&language=en-US&page=$page");
    }
    public function top_rated_movies($page)
    {
        $api_key = env("MOVIES_DB_API_KEY");


        return Http::get("https://api.themoviedb.org/3/movie/top_rated?api_key=$api_key&language=en-US&page=$page");
    }

    public function upcoming_movies($page)
    {
        $api_key = env("MOVIES_DB_API_KEY");


        return Http::get("https://api.themoviedb.org/3/movie/upcoming?api_key=$api_key&language=en-US&page=$page");
    }

    public function now_playing_movies($page)
    {
        $api_key = env("MOVIES_DB_API_KEY");


        return Http::get("https://api.themoviedb.org/3/movie/now_playing?api_key=$api_key&language=en-US&page=$page");
    }

    public function get_movie($id)
    {
        $api_key = env("MOVIES_DB_API_KEY");

        return Http::get(
            "https://api.themoviedb.org/3/movie/{$id}?api_key=$api_key&language=en-US"
        );
    }
    public function get_cast($id)
    {
        $api_key = env("MOVIES_DB_API_KEY");

        return Http::get(
            "https://api.themoviedb.org/3/movie/{$id}/credits?api_key=$api_key&language=en-US"

        );
    }
    public function get_list_of_trailers($id)
    {
        $api_key = env("MOVIES_DB_API_KEY");

        return Http::get(

            "https://api.themoviedb.org/3/movie/{$id}/videos?api_key=$api_key&?type=Trailer&?site=Youtube"

        );
    }
    public function get_list_of_similar_movies($id)
    {
        $api_key = env("MOVIES_DB_API_KEY");

        return Http::get(
            "https://api.themoviedb.org/3/movie/{$id}/similar?api_key=$api_key&language=en-US&page=1"


        );
    }
    public function get_person_details($id)
    {
        $api_key = env("MOVIES_DB_API_KEY");

        return Http::get(
            "https://api.themoviedb.org/3/person/{$id}?api_key=$api_key&language=en-US"

        );
    }
    public function get_known_for($id)
    {
        $api_key = env("MOVIES_DB_API_KEY");

        return Http::get(
            "https://api.themoviedb.org/3/person/{$id}/movie_credits?api_key=$api_key&language=en-US"

        );
    }
    public function get_social_links($id)
    {
        $api_key = env("MOVIES_DB_API_KEY");

        return Http::get(
            "https://api.themoviedb.org/3/person/{$id}/external_ids?api_key=$api_key&language=en-US"


        );
    }
    public function logout()
    {
        Auth::user()->tokens->each(function ($token, $key) {
            $token->delete();
        });

        return response()->json('Successfully logged out');
    }
}
