from cx_Freeze import setup, Executable

exe = Executable(
    script="debut.pyw"
    )
setup(
    name = "Download YouTube",
    version = "0.0.1",
    description = "Programa utilizado para baixar músicas no YouTube",
    executables = [exe]
)