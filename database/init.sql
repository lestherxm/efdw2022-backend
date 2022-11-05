--* INICIO - PACIENTES

-- CREACION DE LA TABLA
DROP TABLE IF EXISTS pacientes;
CREATE TABLE pacientes(
    id_paciente SERIAL PRIMARY KEY,
    nombre_completo VARCHAR(250) NOT NULL,
    edad SMALLINT NOT NULL DEFAULT 0,
    fecha_nacimiento DATE NOT NULl,
    genero CHAR(1) NOT NULL,
    estado_civil CHAR(1) NOT NULL, 
    correo VARCHAR(250) UNIQUE NOT NULL,
    telefono VARCHAR(11) UNIQUE NOT NULL,
    CONSTRAINT chk_genero_paciente CHECK (genero IN ('M', 'F')), -- Display Value> Masculino, Femenino
    CONSTRAINT chk_ecivil_paciente CHECK (estado_civil IN('S', 'C', 'V', 'D')), -- Display Value> Soltero/a, Casado/a, Viudo/a, Divorsiado/a
    CONSTRAINT chk_edad_paciente CHECK (edad >= 0)
);

--* FINAL - PACIENTE



--* INICIO - DOCTORES

-- CREACION DE LA TABLA
DROP TABLE IF EXISTS doctores;
CREATE TABLE doctores(
    id_doctor SERIAL PRIMARY KEY,
    nombre_completo VARCHAR(250) NOT NULL,
    edad SMALLINT NOT NULL DEFAULT 0,
    fecha_nacimiento DATE NOT NULl,
    genero CHAR(1) NOT NULL,
    estado_civil CHAR(1) NOT NULL, 
    correo VARCHAR(250) UNIQUE NOT NULL,
    telefono VARCHAR(11) UNIQUE NOT NULL,
    especialidad VARCHAR(5) NOT NULL, 
    CONSTRAINT chk_genero_doc CHECK (genero IN ('M', 'F')), -- Display Value> Masculino, Femenino
    CONSTRAINT chk_ecivil_doc CHECK (estado_civil IN('S', 'C', 'V', 'D')), -- Display Value> Soltero/a, Casado/a, Viudo/a, Divorsiado/a
    CONSTRAINT chk_edad_doc CHECK (edad >= 0),
    CONSTRAINT chk_especialidad_doc CHECK (especialidad IN ('AP', 'CL', 'CI', 'CP', 'CG', 'CPR', 'D')) -- Display Value> Anatomia Patologica, Cardiologia Clinica, Cardiologia Intervencionista, Cirugia Pediatrica, Cirugia General, Ciriguia Plastica y Reconstructiva, Dermatologia 
);

--* FINAL - DOCTORES



--* INICIO - CONTROL DE CITAS

-- CREACION DE LA TABLA
DROP TABLE IF EXISTS control_citas;
CREATE TABLE control_citas(
    id_cita SERIAL PRIMARY KEY,
    id_paciente INT NOT NULL,
    fecha_cita DATE NOT NULL,
    no_cita SERIAL NOT NULL,
    id_doctor INT NOT NULL,
    estatus_cita BOOLEAN DEFAULT TRUE,
    
    CONSTRAINT fk_id_paciente
    FOREIGN KEY(id_paciente)
    REFERENCES pacientes(id_paciente),

    CONSTRAINT fk_id_doctor
    FOREIGN KEY(id_doctor)
    REFERENCES doctores(id_doctor)

);

--* FINAL - CONTROL DE CITAS