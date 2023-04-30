CREATE TABLE Camera_Info (
    camera_id INT PRIMARY KEY,
    camera_number VARCHAR(20),
    camera_location VARCHAR(100),
    camera_status VARCHAR(20),
    action VARCHAR(100)
);

CREATE TABLE Camera_Footage (
    camera_id INT PRIMARY KEY,
    camera_number VARCHAR(20),
    camera_stream_link VARCHAR(100)
);

CREATE TABLE Map_View (
    camera_id INT PRIMARY KEY,
    camera_number VARCHAR(20),
    map_lat_location DECIMAL(10, 6),
    map_long_location DECIMAL(10, 6)
);

CREATE TABLE Alerts (
    camera_id INT,
    alert_id INT PRIMARY KEY,
    time_and_date DATETIME,
    alert_type VARCHAR(50),
    location VARCHAR(100),
    status VARCHAR(20),
    alert_description VARCHAR(500),
    action_taken VARCHAR(500),
    additional_details VARCHAR(1000),
    from_date DATE,
    to_date DATE
);

CREATE TABLE Reports (
    camera_id INT,
    camera_number VARCHAR(20),
    from_date DATE,
    to_date DATE,
    report_type VARCHAR(50),
    report_analysis_info VARCHAR(1000)
);


INSERT INTO Camera_Info (camera_id, camera_number, camera_location, camera_status, action) 
VALUES (1, 'CAM001', 'Entrance', 'Active', 'None'),
       (2, 'CAM002', 'Lobby', 'Active', 'None');

INSERT INTO Camera_Footage (camera_id, camera_number, camera_stream_link)
VALUES (1, 'CAM001', 'http://example.com/cam001/stream.m3u8'),
       (2, 'CAM002', 'http://example.com/cam002/stream.m3u8');

INSERT INTO Map_View (camera_id, camera_number, map_lat_location, map_long_location)
VALUES (1, 'CAM001', 37.7749, -122.4194),
       (2, 'CAM002', 37.7841, -122.3953);

INSERT INTO Alerts (camera_id, alert_id, time_and_date, alert_type, location, status, alert_description, action_taken, additional_details, from_date, to_date)
VALUES (1, 1001, '2023-04-25 09:30:00', 'Motion', 'Entrance', 'New', 'Motion detected at Entrance', 'Investigate', 'No further action taken', '2023-04-25', '2023-04-25'),
       (2, 1002, '2023-04-26 13:45:00', 'Sound', 'Lobby', 'New', 'Unusual sound heard in Lobby', 'Check for any issues', 'Found loose wire on the speaker', '2023-04-26', '2023-04-26');

INSERT INTO Reports (camera_id, camera_number, from_date, to_date, report_type, report_analysis_info)
VALUES (1, 'CAM001', '2023-04-01', '2023-04-30', 'Monthly', 'Average motion events per day: 5'),
       (2, 'CAM002', '2023-04-01', '2023-04-30', 'Monthly', 'Average sound events per day: 3');
