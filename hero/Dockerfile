FROM jboss/wildfly
RUN /opt/jboss/wildfly/bin/add-user.sh eszapet 123* --silent
ADD hero-1.0-SNAPSHOT.war /opt/jboss/wildfly/standalone/deployments/
