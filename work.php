<!DOCTYPE html>
<html>

    <head>
        <title>Sam Cordingley</title>
        <link rel="stylesheet" type="text/css" href="style.css">
        <link href='http://fonts.googleapis.com/css?family=Raleway:400,100|Roboto+Slab:400' rel='stylesheet' type='text/css'>
        <link href="http://maxcdn.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css" rel="stylesheet">
    </head>

    <body>

        <?php include "header.php"; ?>

        <div id="bg-content">
            <div id="content">
                <ul>
                    <li>
                        <h1><a href="http://www.heatmapnews.com">HEATMAP NEWS</a></h1>
                        <p>This website gives you a quick overview of what happening
                            in the world right now. It displays the most important news
                            stories from around the world as a heatmap overlaid on top of
                            a map of the world. This gives a unique perspective on world news
                            as it puts emphasis on the locations rather than the individual news stories.
                            I feel that this is a more effective way of consuming news as it not only
                            aggregates articles from around the world, but gives them context.</p>
                            <p>The backend was written in Python with the Django framework.
                            The client-side code uses jQuery to perform AJAX requests to the Django server.</p>
                    </li>
                    <li>
                        <h1>GAMES</h1>
                        <p>I have also developed a number of games for code jams and hackathons.
                           I wrote these in Java with the libGDX gaming framework so that the games
                           can be played on a multiple platforms. <a href="http://ludumdare.com/compo/ludum-dare-27/?action=preview&uid=26905">
                               Freeze Box</a> is one of these games. I
                           created it in under 48 hours for the Ludum Dare game jam.</p>
                    </li>
                    <li>
                        <h1>OTHER PROJECTS</h1>
                        <p>See some of my other projects, as well as those that I have contributed to, on <a href="http://github.com/scord"><u>github</u></a>.</p>
                    </li>


                </ul>
            </div>
        </div>

        <script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
        <script type="text/javascript" src="script.js"></script>
    </body>

</html>
