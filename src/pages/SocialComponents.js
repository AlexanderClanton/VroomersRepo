import { Card, CardActions, CardContent, CardHeader, Button, Typography, TextField, CardMedia } from '@mui/material';

export function SocialFriendCard(props) {
  const { user, handleViewProfile, handleDeleteFriend } = props;

  return (
    <>
      <Card key={user.id} variant="outlined" sx={{ borderRadius: 3, borderWidth: 7, borderColor: '#ffcc66', margin: 3 }}>
        <CardContent>
          <Typography variant="h5" component="h2">
            {user.username}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => handleViewProfile(user._userId)}>View Profile</Button>
          <Button size="small" onClick={() => handleDeleteFriend(user._userId)}>Delete Friend</Button>
        </CardActions>
      </Card>
    </>
  );
}

export function SocialUsersCard(props) {
  const { user, handleAddFriend } = props;
  return (
    <Card key={user.id} variant="outlined" sx={{ borderRadius: 3, borderWidth: 7, borderColor: '#ffcc66', margin: 3 }}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {user.username}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => handleAddFriend(user._userId)}>Add Friend</Button>
      </CardActions>
    </Card>
  );
}

export function SocialSearchBarCard(props) {
  const { searchQuery, handleSearch } = props;
  return (
    <TextField
      value={searchQuery}
      onChange={handleSearch}
      label="Search"
      variant="outlined"
      fullWidth
      sx={{ marginLeft: '2rem', marginTop: '1rem', marginRight: '2rem', maxWidth: '100rem', width: '100%' }}
    />
  );
}

export function SocialProfileOverlayCard(props) {
  const { data, closeOverlay } = props;
  const cars = data.cars;

  return (
    <Card sx={{ maxWidth: "50vw", width: "90vw", maxHeight: "60vh", height: "90vh", background: "white", padding: "16px", position: "relative", overflow: "auto" }}>
      <CardHeader
        title={<Typography sx={{ textAlign: "center", fontSize: "2rem" }}>{data.username}</Typography>}
      />
      {data.profilePictureUrl && 
      <CardMedia
        component="img"
        image={data.profilePictureUrl}
        alt="Profile Picture"
        sx={{ objectFit: 'cover', margin: 'auto', width: '350px', height: '350px' }}
      />}
      <CardContent sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <div sx={{ marginBottom: "1rem", textAlign: "center" }}>
          <Typography sx={{ fontSize: "1.5rem", marginBottom: "0.5rem", textAlign: "left" }} variant="body2" component="p">
            Discord: {data.discord}
          </Typography>
          <Typography sx={{ fontSize: "1.5rem", marginBottom: "0.5rem", textAlign: "left" }} variant="body2" component="p">
            Email: {data.email}
          </Typography>
          <Typography sx={{ fontSize: "1.5rem", marginBottom: "0.5rem", textAlign: "left" }} variant="body2" component="p">
            Phone Number: {data.phoneNumber}
          </Typography>
          <Typography sx={{ fontSize: "1.5rem", marginBottom: "0.5rem", textAlign: "left" }} variant="body2" component="p">
            <div>
            Cars: {cars.map((car) => {
              return (
              <div key={car.id}>
                {car.make} {car.model} ({car.year})
              </div>
              );
            })}
            </div>
          </Typography>
        </div>
      </CardContent>
      <Button sx={{ position: "sticky", bottom: "1rem", left: "1rem" }} variant="contained" onClick={closeOverlay}>
        Close
      </Button>
    </Card>
  );
}
