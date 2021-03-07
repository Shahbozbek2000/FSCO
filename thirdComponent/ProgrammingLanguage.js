import languageStyles from '../styles/Language.module.css'

export  function ProgrammingLanguage() {
    return (
        <div className={languageStyles.language}>
        <div className="container">
        <div className="row">
          <div className="col-lg-3 col-sm-6 col-md-3 col-6">
            <div className={languageStyles.programming_image}>
              <img src="https://mobidev.biz/wp-content/uploads/2019/07/ios-app-development-services.svg" />
              
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-md-3 col-6">
            <div className={languageStyles.programming_image}>
              <img src="https://mobidev.biz/wp-content/uploads/2019/07/android-app-development-services.svg" />
              
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-md-3 col-6">
            <div className={languageStyles.programming_image}>
              <img src="https://mobidev.biz/wp-content/uploads/2019/07/flutter-app-development-services.svg" />
              
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-md-3 col-6">
            <div className={languageStyles.programming_image}>
              <img src="https://mobidev.biz/wp-content/uploads/2019/07/react-native-app-development-services.svg" />
              
            </div>
          </div>
        </div>
      </div> 
        </div>
    )
}
