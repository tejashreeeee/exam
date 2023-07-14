const Login = () => {
    return ( 

<>
<img src="https://source.unsplash.com/random/1920x700/?food" height="600" class="d-block w-100" alt="..."></img>
  <div class="container">
    <div class="row">
      <div class="col-md-3 col-sm-12"></div>
      <div class="col-md-6 col-sm-12">
        <div class="card bg-info">
        
          <div class="card-body">
            <h5 class="card-title">good day restaurent</h5>
            <form>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">NAME</label>
                
                <input type="phone no" class="form-control" id="exampleInputEmail1" aria-describedby="order"></input>
                <div id="phone no" class="form-text">have a nise day.</div>
                
              </div>
              <div class="mb-3">
                <label for="examplename" class="form-label">Order</label>
                <input type="password" class="form-control" id="examplename"></input>
              </div>
              <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                <label class="form-check-label" for="exampleCheck1">what u like to have more orders<a href="register.html">more offer</a></label>
              </div>
              <button type="submit" class="btn btn-primary"><a href="index.html" style={{color:"pink",textDecoration:"blue"}}>order more</a></button>
            </form>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-sm-12"> </div>
      
    </div>
  </div>
  <img src="https://source.unsplash.com/random/1920x700/?fruits" height="600" class="d-block w-100" alt="..."></img>
</>

     );
}
 
export default Login;