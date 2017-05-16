## Component Hierarchy

**AuthForm Container**
 - AuthForm

**HomeContainer** 
- New Playlist
- Playbar

**Playlist Sidebar**
- Playlist Items

**PlaylistContainer**
- Song items
-   User avatar
-   Up/down votes containers
-   Song info

**SearchResultsContainer**
- Search results

**PlaylistInfoContainer**
- Group members component
- Exit group
- Edit group

**Routes**

| Path  | Component |
|-------|-----------|
|“/sign-up” | “AuthFormContainer"|
|“sign-in” | “AuthFormContainer"|
|“/home” | “HomeContainer"|
|“playlists/:playlistId” |“PlaylistViewContainer"|
|“playlists/:playlistId/edit” | “PlaylistViewContainer"|
|“playlists/:playlistId/info” | “PlaylistViewContainer"|
|“/search/:results” | “SearchResultContainer"|
