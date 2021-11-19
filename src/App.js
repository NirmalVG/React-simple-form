function App() {
  const login = {
    overflow: "hidden",  
    margin: "10px 0 0 900px",  
    padding: "5px",   
  }
  const userName = {
    width: "200px", 
    height: "30px",  
    border: "2px solid #FFFFFF",  
    borderRadius: "3px", 
    paddingLeft: "8px",
    margin: "10px"
  }
  const pass = {
    width: "200px", 
    height: "30px", 
    border: "2px solid #FFFFFF",
    borderRadius: "3px",  
    paddingLeft: "8px",
    margin: "10px" 
  }
  const log = {
    width: "100px",  
    height: "30px",  
    border: "none",  
    borderRadius: "17px",  
    paddingLeft: "5px",
    color: "#726bec",
    backgroundColor: "#FFFFFF",
    cursor: "pointer",
    margin: "5px",
    fontSize: "15px"
  }
  const navbar = {
    backgroundColor: "#726bec",
    display: "block",
    position: "absolute",
    top: "0px",
    width: "100%"
  }
  const reg = {
    margin: "150px 0px 0px 0px"
  }
  const head = {
    fontFamily: "Calibri", 
    fontSize: "25pt",   
    fontStyle: "normal", 
    fontWeight: "bold", 
    color: "#726bec",
    textAlign: "center",
    textDecoration: "underline"
  }
  const table = {
    fontFamily: "Calibri", 
    color: "white", 
    fontSize: "11pt", 
    fontStyle: "normal",
    fontWeight: "bold",
    backgroundColor: "#726bec", 
    borderCollapse: "collapse",
    border: "2px solid navy"
  }
  const logo = {
    fontFamily: "HelveticaNow",
    fontWeight: "bolder",
    float: "left",
    marginLeft: "20px",
    color: "#FFFFFF",
    fontSize: "30px"
  }
  return (
    <div>
      <nav style={navbar}>
        <h2 style={logo}>DEV CAMP</h2>
        <form style={login} method="POST" action="" enctype="multipart/form-data">
          <input style={userName} type="text" placeholder="Enter Username" name="username" required />
          <input style={pass} type="password" placeholder="Enter Password" name="password" required />
          <button style={log} type="submit">Login</button>
        </form>
      </nav>
      <div style={reg}>
        <h3 style={head}>STUDENT REGISTRATION FORM</h3>
        <form method="POST" action="" enctype="multipart/form-data">
          <table style={table} align="center" cellpadding = "10">
            <tr>
              <td>FIRST NAME</td>
              <td><input type="text" name="First_Name" maxlength="30"/>(max 30 characters a-z and A-Z)</td>
            </tr>
            <tr>
              <td>LAST NAME</td>
              <td><input type="text" name="Last_Name" maxlength="30"/>(max 30 characters a-z and A-Z)</td>
            </tr>
            <tr>
              <td>DATE OF BIRTH</td>
              <td>
                <select name="Birthday_day" id="Birthday_Day">
                <option value="-1">Day:</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
                </select>
                <select id="Birthday_Month" name="Birthday_Month">
                <option value="-1">Month:</option>
                <option value="January">Jan</option>
                <option value="February">Feb</option>
                <option value="March">Mar</option>
                <option value="April">Apr</option>
                <option value="May">May</option>
                <option value="June">Jun</option>
                <option value="July">Jul</option>
                <option value="August">Aug</option>
                <option value="September">Sep</option>
                <option value="October">Oct</option>
                <option value="November">Nov</option>
                <option value="December">Dec</option>
                </select>
                <select name="Birthday_Year" id="Birthday_Year">
                <option value="-1">Year:</option>
                <option value="2012">2012</option>
                <option value="2011">2011</option>
                <option value="2010">2010</option>
                <option value="2009">2009</option>
                <option value="2008">2008</option>
                <option value="2007">2007</option>
                <option value="2006">2006</option>
                <option value="2005">2005</option>
                <option value="2004">2004</option>
                <option value="2003">2003</option>
                <option value="2002">2002</option>
                <option value="2001">2001</option>
                <option value="2000">2000</option>
                <option value="1999">1999</option>
                <option value="1998">1998</option>
                <option value="1997">1997</option>
                <option value="1996">1996</option>
                <option value="1995">1995</option>
                <option value="1994">1994</option>
                <option value="1993">1993</option>
                <option value="1992">1992</option>
                <option value="1991">1991</option>
                <option value="1990">1990</option>
                <option value="1989">1989</option>
                <option value="1988">1988</option>
                <option value="1987">1987</option>
                <option value="1986">1986</option>
                <option value="1985">1985</option>
                <option value="1984">1984</option>
                <option value="1983">1983</option>
                <option value="1982">1982</option>
                <option value="1981">1981</option>
                <option value="1980">1980</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>EMAIL ID</td>
              <td><input type="text" name="Email_Id" maxlength="100" /></td>
            </tr>
            <tr>
              <td>MOBILE NUMBER</td>
              <td>
              <input type="text" name="Mobile_Number" maxlength="10" />(10 digit number)
              </td>
            </tr>
            <tr>
              <td>GENDER</td>
              <td>
              Male <input type="radio" name="Gender" value="Male" />
              Female <input type="radio" name="Gender" value="Female" />
              </td>
            </tr>
            <tr>
              <td>COURSES<br />APPLIED FOR</td>
              <td>
                MEAN
                <input type="radio" name="Course_MEAN" value="MEAN" />
                MERN
                <input type="radio" name="Course_MERN" value="MERN" />
                MEVN
                <input type="radio" name="Course_MEVN" value="MEVN" />
                LAMP
                <input type="radio" name="Course_LAMP" value="LAMP" />
              </td>
            </tr>
            <tr>
              <td colspan="2" align="center">
                <input style={log} type="submit" value="Submit" />
                <input style={log} type="reset" value="Reset" />
              </td>
            </tr>
          </table>
        </form>
      </div>
    </div>
  );
}

export default App;


