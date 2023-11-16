import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Solution {
	// L분 이상 U분 이하의 운동(1주일동안)
	// 이번주에 X분 운동함
	// 제한된 시간보다 덜 했다면 얼마나 더 해야되는지 출력
	public static void main(String[] args) throws IOException{
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringBuilder sb = new StringBuilder();
		StringTokenizer st;
		
		int T = Integer.parseInt(br.readLine());
		for(int tc=1;tc<=T;tc++) {
			st = new StringTokenizer(br.readLine());
			int L = Integer.parseInt(st.nextToken());
			int U = Integer.parseInt(st.nextToken());
			int X = Integer.parseInt(st.nextToken());
			
			int answer = 0;
			
			if(X >= L && X <= U) {
				answer = 0;
			}else if(X > U) {
				answer = -1;
			}else {
				answer = L - X;
			}
			
			sb.append("#"+tc+" "+answer+"\n");
		}
		System.out.print(sb);
	}
}
