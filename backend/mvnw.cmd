@echo off
setlocal

set MAVEN_HOME=%~dp0\.mvn\wrapper\maven-wrapper.jar
set MAVEN_OPTS=-Xmx1024m -XX:MaxPermSize=256m

if not exist "%MAVEN_HOME%" (
    echo "Maven wrapper jar not found. Please run mvnw to download it."
    exit /b 1
)

java %MAVEN_OPTS% -cp "%MAVEN_HOME%" org.apache.maven.wrapper.MavenWrapperMain %*
endlocal