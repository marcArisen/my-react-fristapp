const Homepage = ( { resume } ) => {
    return (
        // <div className="row banner">
        //     <h1 className="responsive-headline">I am {resume.name}.</h1>
        // </div>
        <div className="row banner">
            <div className="banner-text">
               <h1 className="responsive-headline">I am {resume.name}.</h1>
               <h3 style={{color:'#fff', fontFamily:'sans-serif '}}>I am a {resume.role}.{resume.roleDescription}
               </h3>
               <hr/>
               <ul className="social">
                  {
                    resume.socialLinks && resume.socialLinks.map(item =>{
                      return(
                              <li key={item.name}>
                                <a href={item.url} target="_blank"><i className={item.className}></i></a>
                              </li>
                            )
                          }
                    )
                  }
               </ul>
            </div>
         </div>
    )
}

export default Homepage;