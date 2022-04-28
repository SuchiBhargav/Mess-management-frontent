import {React,useState} from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography} from '@material-ui/core'
import {Link} from 'react-router-dom';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Dashboard from "./dashboard2";
import axios from "axios";
const Login=()=>{
    const [username, setusername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState('');

    function validateForm() {
        return username.length > 0 && password.length > 0;
    }


    const sub = async(e) => {
        e.preventDefault();
        let hardcodedCred = {
            username: 'Sanphire',
            password: 'Sanphire@015'
        }
        let hardcodedCred1 = {
            username: 'Suchi',
            password: 'Suchi@015'
        }

        if ((username == hardcodedCred.username) && (password == hardcodedCred.password)) {
            //combination is good. Log them in.
            //this token can be anything. You can use random.org to generate a random string;

            window.location.href="/dashboard";
        }

        else if ((username == hardcodedCred1.username) && (password == hardcodedCred1.password)) {
            //combination is good. Log them in.
            //this token can be anything. You can use random.org to generate a random string;

            window.location.href="/doctordashboard";
        }
        else {
            //bad combination
            alert('Wrong Username or Password Combination');
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObject = { 'username': username, 'password': password ,'role':'ROLE_PATIENT'};



        try {
            let response=await axios.get('http://e9ad-119-161-98-68.ngrok.io/signin', { headers: authObject });

            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            console.log(response)

            window.location.reload();
            setError('');
        } catch (err) {
            setError('Oops, incorrect credentials.');
            console.log("lop")
        }
    };

    const paperStyle={padding :20,height:'70vh',width:400, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2><i>Hii Buddy:</i></h2>
                    <h2><i>Welcome Back</i></h2>
                </Grid>
                <TextField  value={username} onChange={(e) => setusername(e.target.value)} label='Username' placeholder='Enter username' fullWidth required/>
                <TextField value={password}  onChange={(e) => setPassword(e.target.value)} label='Password' placeholder='Enter password' type='password' fullWidth required/>
                <FormControlLabel
                    control={
                        <Checkbox
                            name="checkedB"
                            color="green"
                        />
                    }
                    label="Remember me"
                />
                <Button type='submit' onClick={sub} variant="contained" style={avatarStyle} fullWidth><b>Login</b></Button>
                <Link to="/forgotPassword" > <Button type='submit'  variant="contained" style={btnstyle} size="small">Forget Password</Button><br></br></Link>
                <Link to="/signup" >  <Button type='submit'  variant="contained" style={btnstyle} size="small">SignUp</Button></Link>
                {/*<Typography >*/}
                {/*    <Link href="#" >*/}
                {/*        Forgot password ?*/}
                {/*    </Link>*/}
                {/*</Typography>*/}
                {/*<Typography > Do you have an account ?*/}
                {/*    <Link href="#" >*/}
                {/*        Sign Up*/}
                {/*    </Link>*/}
                {/*</Typography>*/}
            </Paper>
        </Grid>
    )
}

export default Login