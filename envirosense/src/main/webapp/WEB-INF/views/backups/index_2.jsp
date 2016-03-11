<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
		<c:import url="/static/common/head/favicon.jsp" />
		<c:import url="/static/common/head/metaTags.jsp" />
		<c:import url="/static/common/head/jquery.jsp" />
		<c:import url="/static/common/head/bootstrap.jsp" />
		<c:import url="/static/common/head/bootstrapSwitch.jsp" />
		<c:import url="/static/common/head/bootstrapLadda.jsp" />
		<c:import url="/static/common/head/slick.jsp" />
		<c:import url="/static/common/head/style.jsp" />
		<c:import url="/static/common/head/navbar.jsp" />

		<title>EnviroSense</title>
	</head>

	<body>
    <div id="wrapper">
		
		<!-- SIDEBAR CONTENT -->
		<c:import url="/static/common/navbar/content.jsp" />
		
		<div id="page-content-wrapper">
		<div class="container-fluid nopadding">
			<div class="row">
			<div class="col-xs-12 col-md-6 col-md-offset-3">

				<!-- SIDEBAR TOGGLE -->
				<c:import url="/static/common/navbar/toggle.jsp" />

				<div class="row page-header">
				<div class="col-xs-12">
					<h1>Live Data</h1>
					<small>Let's pick up where you left off.</small>
				</div>
			</div>
			</div>
			</div>
			
			<div class="row">
			<div class="col-xs-12 nopadding">
				<div class="single-items">
					
				</div>
		</div>
		</div>
	</div>
	
	<!-- Javascript : SLICK -->
	<script src="<c:url value='/static/js/RunSlick.js' />"></script>
	
	<!-- Javascript : Google Charts -->
	<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
	
	<!--Javasciprt : Utilities -->
	<script src="<c:url value='/static/js/utilities.js' />"></script>
	
	<!--Javasciprt : AJAX By Page Settings -->
	<script src="<c:url value='/static/js/ajax/dataByPageSettings.js' />"></script>
	
	<!--Javasciprt : AJAX By Sensor Type -->
	<script src="<c:url value='/static/js/ajax/dataBySensorType.js' />"></script>
	
	<!--Javasciprt : AJAX By All Sensors -->
	<script src="<c:url value='/static/js/ajax/dataByAllSensors.js' />"></script>
	
	<!--Javasciprt : AJAX Controller -->
	<script src="<c:url value='/static/js/ajax/ajaxController.js' />"></script>
	
	<!-- Javascript : Startup Sequence-->
	<script src="<c:url value='/static/js/startup/report.js' />"></script>
	
	</body>
</html>