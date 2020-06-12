$(document).ready(function(){
    $('#searchUser').on('keyup' , function(e){
        // console.log(e.target.value );
        let username = e.target.value;

        // making request to Github
        $.ajax({
            url : 'https://api.github.com/users/'+username,
            data : {
                client_id : '0c1c3753f2b184e64929',
                client_secret : '38028b0fd92a98b84370cf1dcc53de00a4df69bf',
                
            }
        }).done(function(user){
            $.ajax({
                url : 'https://api.github.com/users/'+username+'/repos',
                data : {
                    client_id : CLIENT_ID,
                    client_secret : CLIENT_SECRET,
                    sort : 'created_at: asc',
                    per_page : 5
                }
            }).done(function(repos) {
                // console.table(repos);
                $('#repos').empty();
                $.each(repos , function(index, repo) {
                    $('#repos').append(`
                    <div class="p-2 bd-highlight border-bottom">
                        <a class="text-decoration-none font-weight-bold my-2" href="${repo.html_url}">${repo.name}</a>
                        <p class="text-justify">${repo.description}</p>
                        <div class="d-flex justify-content-between">
                            <div ><span class="badge badge-primary"></span> <p class="text-justify h6 text-dark"> ${repo.language}</p></div>
                            <div >
                                <button type="button" class="btn btn-primary btn-sm">
                                    Watch <span class="badge badge-light"> ${repo.watchers}</span>
                                </button>
                                <button type="button" class="btn btn-primary btn-sm">
                                    Star <span class="badge badge-light">${repo.stargazers_count}</span>
                                </button>

                                <button type="button" class="btn btn-primary btn-sm">
                                    Forks <span class="badge badge-light">${repo.forks}</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    `);
                });
            
            });

            // console.log(user.name);

            $('#profile').html(`
                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-3">
                                <img src="${user.avatar_url}" class="img-fluid img-thumbnail">
                                <h5 class="card-title text-center text-justify mt-2"> ${user.name} </h5>
                                <h6 class="card-title text-center text-justify text-muted mt-1"> ${user.login} </h6>
                                <a class="btn btn-light btn-block my-3" target="_blank" href="${user.html_url}">View Profile</a>
                                <p class="text-justify">Company : ${user.company}</p>
                            </div>
                            <div class="col-md-9">
                                <span class="btn btn-primary btn-sm">
                                    Public Repos : ${user.public_repos}
                                </span>
                                <span class="btn btn-success btn-sm">
                                    Public Gists : ${user.public_gists}
                                </span>
                                <span class="btn btn-danger btn-sm">
                                    Followers : ${user.followers}
                                </span>
                                <span class="btn btn-warning btn-sm">
                                    Followings : ${user.following}
                                </span>
                                <h3 class="text-justify mt-4">Bio <hr> </h3>
                                <p class="text-justify font-weight-light" >${user.bio}</p>
                                <ul class="list-group mt-3">
                                    <li class="list-group-item">Email Id : ${user.email}</li>
                                    <li class="list-group-item">Blog/Website : ${user.blog}</li>
                                    <li class="list-group-item">Location : ${user.location}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            `);
        });
    });
});